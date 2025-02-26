import json
import os

def cargarDatos():
    materias = []

    if os.path.exists('materias.json'):
        with open('materias.json') as file:
            materias = json.load(file)
    
    condicionDeCorte = 1
    while condicionDeCorte != 0:
        materia_id = int(input('Ingresa el id de la materia: '))
        nombre_corto = input('Ingresa el nombre corto de la materia: ')
        nombre_completo = input('Ingresa el nombre completo de la matera: ')
        creditos = int(input('Ingrese los creditos: '))
        nivel = int(input('Ingrese el nivel de la materia: '))

        corr_reg_input = input('Ingresa las correlativas regulares separadas por coma (ENTER si no tiene): ')
        corr_apr_input = input('Ingresa las correlativas aprobadas separadas por coma (ENTER si no tiene): ')

        corr_reg = [int(id.strip()) for id in corr_reg_input.split(',')] if corr_reg_input else []
        corr_apr = [int(id.strip()) for id in corr_apr_input.split(',')] if corr_apr_input else []

        

        
    
        
        materia = {
            "id": materia_id,
            "nombreCorto": nombre_corto,
            "nombreCompleto": nombre_completo,
            "nivel": nivel,
            "correlativasRegulares": corr_reg,
            "correlativasAprobadas": corr_apr,
            "creditos": creditos
        }

        materias.append(materia)
        condicionDeCorte = int(input('0 para cortar, 1 para seguir: '))
    with open('materias.json', 'w') as file:
        json.dump(materias, file, indent=4)
    print('datos guardados')

cargarDatos()
    