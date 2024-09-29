export default {
  fetch() {
    STARTED_AT ||= Date.now()

    return Response.json({
      BUILT_AT,
      uptimeSeconds: uptimeSeconds()
    })
  },

  scheduled(event) {
    STARTED_AT ||= Date.now()

    console.info({
      event, // { cron: "* * * * *", scheduledTime: 1727641771000 }
      // scheduledTime rounds to the nearest minute
      BUILT_AT,
      uptimeSeconds: uptimeSeconds() // always 0 for scheduled
    })
  }
}

const uptimeSeconds = () => Math.round((Date.now() - STARTED_AT) / 1000)

let STARTED_AT = 0
let BUILT_AT = new Date().toJSON()
