export const handler = async (event, context) => {
    let log = {
        "event": event,
        "context": context,
        "app_name": process.env.APP_NAME || "undefined",
        "app_version": process.env.APP_VERSION || "undefined"
    };

    console.log('Remaining time in milliseconds:', context.getRemainingTimeInMillis());
    console.log('App Name:', process.env.APP_NAME);
    console.log('App Version:', process.env.APP_VERSION);
    console.log('Event:', JSON.stringify(log.event, null, 2));
    console.log('Context:', JSON.stringify(log.context, null, 2));
    console.log('Remaining time in milliseconds:', context.getRemainingTimeInMillis());

    return log;
};