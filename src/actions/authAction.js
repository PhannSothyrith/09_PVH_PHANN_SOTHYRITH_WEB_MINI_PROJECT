import { registerService } from "@/app/service/auth.service"

export const registerAction = async (formData) =>{
    await registerService(formData)
}
 