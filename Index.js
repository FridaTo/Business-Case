const { Kushki } = requerir('@kushki/js');

const comercianteId = '20000000104111374000';


var kushki = nuevo Kushki({
    ID de comerciante: ID de comerciante,
    enTestEnvironment: verdadero,
    regional:falso
  });


  devolución de llamada var = función (respuesta) {
    
    si(código.respuesta){
        respuesta = {
            "token": "90a9f2d93ba508c38971890454897fd4"
        }
        console.log(respuesta.token);
        token constante = respuesta.token;
        hacer_a_charge(token);
    } demás {
      console.error('Error: ',respuesta.error, 'Código: ', respuesta.código, 'Mensaje: ',respuesta.message);
    }
  }
  kushki.requestSubscriptionToken({
    tarjeta: {
      nombre: "Juan Guerra",
      número: "8921301930249384",
      CVC: "345",
      mes de vencimiento: "12",
      Año de vencimiento: "28"
  },
    Moneda: USD"
  }, llamar de vuelta); // También puedes configurar la función directamente



función make_a_charge(token){
    const myHeaders = nuevos encabezados();
    myHeaders.append("Aceptar", "aplicación/json");
    myHeaders.append("Tipo de contenido", "aplicación/json");
    myHeaders.append("Identificador-de-comerciante-privado", Id-de-comerciante);

    const crudo = JSON.stringify({
    "ficha": ficha,
    "cantidad": {
        "moneda": "MXN",
        "subtotalIva": 0,
        "subtotalIva0": 5000,
        "iva": 0,
        "hielo": 0,
        "impuestos adicionales": {
        "iac": 0,
        "tasaAeroportuaria": 0,
        "agenciaDeViaje": 0
        }
    },
    "metadatos": {
        "clave0": "valor0",
        "clave1": "valor1",
        "clave2": "valor2"
    },
    "respuestacompleta": "v2",
    "ignorar advertencias": verdadero,
    "Detalles de contacto": {
        "primerNombre": "Juan",
        "apellido": "Gama",
        "correo electrónico": "usuario@ejemplo.com",
        "tipodocumento": "CURP",
        "documentNumber": "ABCD123456EF",
        "NúmeroTeléfono": "+523988734644"
    },
    "Detalles del pedido": {
        "dominiodelsitio": "ejemplo.com",
        "detalles de envío": {
        "nombre": "John Doe",
        "teléfono": "+523988734644",
        "direcciones": "Centro 123",
        "ciudad": "Monterrey",
        "región": "Nuevo León",
        "país": "México"
        },
        "Detalles de facturación": {
        "nombre": "John Doe",
        "teléfono": "+523988734644",
        "direcciones": "Centro 123",
        "ciudad": "Monterrey",
        "región": "Nuevo León",
        "país": "México"
        }
    },
    "Detalles de producto": {
        "producto": [
        {
            "identificación": "198952AB",
            "title": "Servicios digitales de libros electrónicos",
            "precio": 15000,
            "sku": "10101042",
            "Cantidad: 1
        }
        ]
    },
    "tresDominiosSecure": {
        "cavv": "AAABBoVBaZKAR3BkdkFpELpWIiE=",
        "eci": "07",
        "xid": "NEpab1F1MEdtaWJ2bEY3ckYxQzE=",
        "especificaciónVersión": "2.2.0",
        "aceptarRiesgo": verdadero
    }
    });

    opciones de solicitud constantes = {
    método: "POST",
    encabezados: misEncabezados,
    cuerpo: crudo,
    redireccionar: "seguir"
    };

    fetch("https://api-uat.kushkipagos.com/card/v1/charges", requestOptions)
    .entonces((respuesta) => respuesta.texto())
    .entonces((resultado) => console.log(resultado))
    .catch((error) => console.error(error));
    }
