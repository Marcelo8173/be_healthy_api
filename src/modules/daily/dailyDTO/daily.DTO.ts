export interface IDailyDTO {
    description: string;
    type: 'lunch' | 'breakfast' | 'dinner' | 'snack';
    day: Date; 
    user_id: string;
}