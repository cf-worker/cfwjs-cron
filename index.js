export default {
  fetch() {
    STARTED_AT ||= Date.now()
    return Response.json({
      BUILT_AT,
      uptimeSeconds: uptimeSeconds(),
      now: Date.now(),
      date: new Date().toJSON()
    })
  },

  scheduled(event) {
    STARTED_AT ||= Date.now()
    console.info({
      event,
      BUILT_AT,
      uptimeSeconds: uptimeSeconds(),
      now: Date.now(),
      date: new Date().toJSON()
    })
  }
}

const uptimeSeconds = () => Math.round((Date.now() - STARTED_AT) / 1000)

let STARTED_AT = 0
let BUILT_AT = new Date().toJSON()
