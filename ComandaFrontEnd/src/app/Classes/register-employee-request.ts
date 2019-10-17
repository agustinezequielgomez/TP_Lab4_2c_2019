export class RegisterEmployeeRequest {
    public nombre: string;
    public pass: string;
    public tipo: EmployeeRole;
    public foto: File;
}

export enum EmployeeRole {
    socio = 'socio',
    administrador = 'administrador',
    mozo = 'mozo',
    cocinero = 'cocinero',
    cervezero = 'cervezero'
}
