import { AppError } from './app.error'

export class ConflictError extends AppError {
    constructor(public originalError?:any){
        super()
    }
    
}