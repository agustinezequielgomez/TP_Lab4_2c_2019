import { Time } from '@angular/common';

export class Pedido {
    public id: number;
    public n_mesa: number;
    public estado: string;
    public foto: string;
    public codigo_pedido: string;
    public id_empleado: number;
    public importe: number;
    public pedido_realizado: Time;
    public pedido_en_preparacion: Time;
    public pedido_listo_para_servir: Time;
    public pedido_entregado: Time;
    public tiempo_estimado: Time;
    public created_at: Date;
    public updated_at: Date;
}
