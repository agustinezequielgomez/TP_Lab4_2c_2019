import { Time } from '@angular/common';
export class Food {
    public id: number;
    public id_pedido: number;
    public tipo: string;
    public nombre_alimento: string;
    public estado: string;
    public tiempo_comienzo: Time;
    public tiempo_estimado: Time;
    public tiempo_final: Time;
    public id_empleado: number;
    public created_at: Date;
    public updated_at: Date;
}
