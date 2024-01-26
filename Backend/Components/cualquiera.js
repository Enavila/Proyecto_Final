const vendedor = {
    "nombre": "juan",
    "apellido": "perez",
    "edad": 20,
    "ciudad": "bogota",
    "pais": "colombia",
    "metodo_de_pago":{
        "transferencia": [
            {
                "numero_de_cuenta": "123456789",
                "banco": "banco de bogota",
                "titular": "juan perez"
            },
            {
                "numero_de_cuenta": "987654321",
                "banco": "banco de cali",
                "titular": "juan perez"
            },
            {
                "numero_de_cuenta": "456789123",
                "banco": "banco de medellin",
                "titular": "juan perez"
            }
        ],
        "cheque":[
            {
                "numero_de_cheque": "123456789",
                "banco": "banco de bogota",
                "titular": "juan perez",
                "otroDatoCheque": "otroDato"
            }
        ],
        "efectivo": true,
        "tarjeta": true,
    }
}