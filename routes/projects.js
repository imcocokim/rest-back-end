import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import { Router } from 'express'
import * as projectsCtrl from '../controllers/projects.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, projectsCtrl.index)
router.post('/', checkAuth, projectsCtrl.create)
router.delete('/:id', checkAuth, projectsCtrl.delete)
router.get('/:id', checkAuth, projectsCtrl.show)


router.get('/:id/days', checkAuth, projectsCtrl.dayIndex)
router.post('/:id/days', checkAuth, projectsCtrl.dayCreate)
router.post('/:id/days/dayId', checkAuth, projectsCtrl.dayShow)
router.post('/:id/days/:dayId/schedules', checkAuth, projectsCtrl.createSchedule)
router.delete('/:id/days/:dayId/schedules/:schedId', checkAuth, projectsCtrl.deleteSched)

export { router }