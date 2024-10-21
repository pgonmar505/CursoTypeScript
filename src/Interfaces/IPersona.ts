interface IPersona{
    nombre:string;
    apellidos: string;
    DNI: string;
    edad?:number;

    setNombre:(nombre:string) => void;
    getNombre:() => 
    //getters y setters
}