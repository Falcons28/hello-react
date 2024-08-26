function AtaqueAleatorioEnemigo() {
    const numeroAleatorio = Math.floor(Math.random() * 8) + 1;
    let ataque;
    switch (numeroAleatorio) {
      case 1:
        ataque = "FUEGO";
        break;
      case 2:
        ataque = "AGUA";
        break;
      case 3:
        ataque = "TIERRA";
        break;
      case 4:
        ataque = "AIRE";
        break;
      case 5:
        ataque = "RAYO";
        break;
      case 6:
        ataque = "OSCURIDAD";
        break;
      case 7:
        ataque = "HIELO";
        break;
      default:
        ataque = "METAL";
    }
    return ataque;
  }
  
  export default AtaqueAleatorioEnemigo;
  