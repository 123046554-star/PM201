import os

#funcion para limpiar la pantalla en cada nivel
def limpiar():
 
    os.system('cls' if os.name == 'nt' else 'clear')

def inicio():
    limpiar()
    print("   SURVIVAL GUIDE")
    print("\nBienvenido a la materia de Programación Móvil.")
    print("En esta actividad debes supera los desafios para desbloquear la guia de supervivencia de la materia.\n")

    # Preguntas de la cámara de las reglas
    print("**** Nivel 1: LA CAMARA DE LAS REGLAS ****")
    p1 = input("1. ¿Cual es el porcentaje de asistencia y trabajos requerido? ")
    p2 = input("2. ¿Cuantos minutos de tolerancia se permiten al inicio? ")
    p3 = input("3. ¿Plazo maximo para justificar falta en horas? ")
    p4 = input("4. ¿Cual es la consecuencia del plagio? ")

    if "80" in p1 and "10" in p2 and "24" in p3 and "reprobar" in p4.lower():
        check = input("\n[ ] Escribe la palabra 'acepto' para comprometerte con el reglamento de la materia: ")
        if check.upper() == "ACEPTO":
            print("\nReglamento desbloqueado!!!!")
            print("- 80% Asistencia y trabajos.")
            print("- 10 min tolerancia.")
            print("- Justificacion en maximo 24 horas.")
            print("- Plagio amerita reprobar la asignatura.")
            input("\nPresiona Enter para continuar con el  oraculo de las notas.")
        else:
            print("No aceptaste el compromiso. Fin del juego.")
            return
    else:
        print("Respuestas incorrectas. Revisa el reglamento y reinicia el programa")
        return

    #Nivel 2 oraculo
    limpiar()
    print("*** Nivel 2: EL ORACULO DE LAS NOTAS ***")
    p5 = input("1. ¿Valor de la evidencia de conocimiento P1 y P2? ")
    p6 = input("2. ¿Valor de la evidencia de producto en los 3 parciales? ")
    p7 = input("3. ¿Valor del proyecto integrador en el 3er parcial? ")

    if "40" in p5 and "30" in p6 and "50" in p7:
        check2 = input("\n[ ] Escribe la palabra 'entendido' para aceptar la evaluacion: ")
        if check2.upper() == "ENTENDIDO":
            print("\nEVALUACION DESBLOQUEADA:")
            print("- Conocimiento: 40% (P1 y P2).")
            print("- Producto: 30% (P1, P2 y P3).")
            print("- Proyecto Integrador: 50% (P3).")
            input("\nPresiona Enter para ver los Skills.")
        else:
            print("No aceptaste los terminos.")
            return
    else:
        print("Error en los porcentajes. El Oraculo se cierra.")
        return

    # skills a desbloquear
    limpiar()
    print("**** Nivel 3: SKILLS A DESBLOQUEAR *****")
    print("Objetivos de la materia:")
    p8 = input("1. ¿Se desarrollaran soluciones multiplataforma? (si/no): ")
    p9 = input("2. ¿Se usara programacion orientada a objetos? (si/no): ")

    if p8.lower() == "si" and p9.lower() == "si":
        check3 = input("\n[ ] Escribe la palabra 'listo' para desbloquear objetivos: ")
        if check3.upper() == "LISTO":
            print("\nObjetivo general desbloqueado:")
            print("El alumno desarrollara aplicaciones innovadoras empleando tecnicas")
            print("y recursos de programacion movil para provision de soluciones.")
            input("\nPresiona Enter para ver la Linea del Tiempo de este cuatrimestre.")
        else:
            return
    else:
        print("Debes conocer los objetivos de la materia.")
        return

    # fechas de la linea del tiempo
    limpiar()
    print("*** Nivel 4: LA LINEA DEL TIEMPO ***")
    print("Periodo: Mayo - Agosto 2026")
    print("- Evaluacion 1er Parcial: 01-06-26")
    print("- Evaluacion 2do Parcial: 06-07-26")
    print("- Evaluacion 3er Parcial: 10-08-26")
    print("- Examen Final: 17-08-26")
    print("\nFELICIDADES!!! Has completado la Survival Guide con éxito.")

# Ejecutar el programa
if __name__ == "__main__":
    inicio()