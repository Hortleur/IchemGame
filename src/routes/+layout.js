
import { PUBLIC_EMAIL_PUBLIC_KEY, PUBLIC_SERVICE_ID, PUBLIC_TEMPLATE_ID} from '$env/static/public'

export const load =  () => {
    return {
        emailKey: PUBLIC_EMAIL_PUBLIC_KEY,
        serviceId : PUBLIC_SERVICE_ID,
        templateId : PUBLIC_TEMPLATE_ID,

    }
}