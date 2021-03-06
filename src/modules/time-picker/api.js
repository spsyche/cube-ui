import createAPI from '../../common/helpers/create-api'
import { warn } from '../../common/helpers/debug'

export default function addTimePicker (Vue, TimePicker) {
  const timePickerAPI = createAPI(Vue, TimePicker, ['select', 'cancel', 'change'], false)
  timePickerAPI.before((data, renderFn, single) => {
    if (single) {
      warn('TimePicker component can not be a singleton.')
    }
  })
}
