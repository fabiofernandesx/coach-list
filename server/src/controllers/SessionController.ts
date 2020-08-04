import { Request, Response, response } from 'express';
import db from '../database/conn';
import convertHourToMinutes from '../utils/convertHourToMinutes';

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class SessionController {
  async index(req: Request, res: Response) {
    const filters = req.query;
    if (!filters.area || !filters.week_day || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters',
      });
    }
    const area = filters.area as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

    const timeInMinutes = convertHourToMinutes(time);
    const sessions = await db('sessions')
      .whereExists(function () {
        this.select('sessions_schedule.*')
          .from('sessions_schedule')
          .whereRaw('`sessions_schedule`.`session_id` = `sessions`.`id`')
          .whereRaw('`sessions_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`sessions_schedule`.`from` <= ??', [Number(timeInMinutes)])
          .whereRaw('`sessions_schedule`.`to` > ??', [Number(timeInMinutes)]);
      })
      .where('sessions.area', '=', area)
      .join('users', 'sessions.user_id', '=', 'users.id')
      .select(['sessions.*', 'users.*']);
    return res.json(sessions);
  }
  async create(req: Request, res: Response) {
    const { name, avatar, phone, bio, area, price, schedule } = req.body;
    const trx = await db.transaction();
    try {
      const insertedUsersIds = await trx('users').insert({ name, avatar, phone, bio });
      const user_id = insertedUsersIds[0];
      const insertedSessionIds = await trx('sessions').insert({ area, price, user_id });
      const session_id = insertedSessionIds[0];

      const sessionSchedule = schedule.map((item: ScheduleItem) => {
        return {
          session_id,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to),
        };
      });

      await trx('sessions_schedule').insert(sessionSchedule);
      await trx.commit();
      res.status(201).send({ value: 'data' });
    } catch (error) {
      console.log(error);
      await trx.rollback();
      return res.status(400).json({
        error: 'Unexpected error while creating session',
      });
    }
  }
}
