const numerosFuturos = document.getElementById("zonaEspera")
const hijos = numerosFuturos.querySelectorAll("div")
const numerosPosibles = [-2, -1, 1, 2, 3, 4, 5, -3,1,2,3,4,5]
const velocidadPosibles = [0.2,0.1,0.3]
const calculo1=document.getElementById("zonaResul1")
const calculo2=document.getElementById("zonaResul2")
const calculo3=document.getElementById("zonaResul3")
copia = []
numerosCaen=[0,0,0,0]
velocidad=[2,2,2,2]
posicionCaen=[0,0,0,0]
numerosCalcul=[0,0,0]
puntos=0
tiempo=60
racha=0
bandera1=0


function inicio() {

	numerosCalcul[0]= Math.floor((Math.random() * (11-4))+4)
	numerosCalcul[1]= Math.floor((Math.random() * (11-4))+4)
	numerosCalcul[2]= Math.floor((Math.random() * (11-4))+4)
	zonaTotal1.innerHTML=numerosCalcul[0]
	zonaTotal2.innerHTML=numerosCalcul[1]
	zonaTotal3.innerHTML=numerosCalcul[2]
	NumerosEspera= numeroEspera(numerosPosibles)
	GenerarNumeros()
	let numerosFuturos = document.getElementById("zonaEspera")
  	let hijos = numerosFuturos.querySelectorAll("div")
  	copia.forEach((valor, index) => {
    if (hijos[index]) {
      hijos[index].textContent = valor
    }
    juego=setInterval(moveraNumero,500)
  });
  	crono=setInterval(contaTiempo,1000)
}


 function numeroEspera(vector) {
      for (let i = 0; i < 5; i++) {
          let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)];
          copia.push(numero)
          let nuevoNumero = document.createElement("div")
		  nuevoNumero.textContent = copia[i];
		  nuevoNumero.classList.add("newNumero")
		  numerosFuturos.appendChild(nuevoNumero)
      }
      return copia;
}


function GenerarNumeros() {
	let numerosCaida = document.getElementById("zonaCaida")
	for (let i = 0; i < 4; i++) {
		numerosCaen[i]=copia[copia.length-1]
		let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
		let nuevoCaida = document.createElement("div")
		nuevoCaida.id="caida"+i
		nuevoCaida.textContent = numerosCaen[i]
		nuevoCaida.addEventListener("click", () => {
			idSeleccionado = nuevoCaida.id
			moverNumero(idSeleccionado) 
		});
		nuevoCaida.classList.add("caida"+i)
		numerosCaida.appendChild(nuevoCaida)
		
		actualizarVector(copia,numero)

    }
}
function actualizarVector(vector, nuevoNumero) {
  // Elimina el último elemento
  vector.pop()

  // Desplaza los elementos: inserta el nuevo número al principio
  vector.unshift(nuevoNumero)

  // El vector ahora tiene los valores desplazados + el nuevo al principio
  return vector
}

function actualizarNumeros() {
	let numerosFuturos = document.getElementById("zonaEspera")
  	let hijos = numerosFuturos.querySelectorAll("div")
  	copia.forEach((valor, index) => {
    if (hijos[index]) {
      hijos[index].textContent = valor
  
    } 
    else {
      console.log("No existe el hijo en posición " + index)
    }
})
}
//hace que los numeros caigan bajen hasta su limite y suban nuevamente
function moveraNumero() {
	for (let i = 0; i < 4; i++) {
		let con = document.getElementById("caida" + i)
		if(bandera1==0){
			velocidad[i]= velocidadPosibles[Math.floor(Math.random() * velocidadPosibles.length)]
		}
		
		if(i==0){
			setTimeout(() => {
  			con.style.background="url(img/nube.png)no-repeat"
				con.style.color="royalblue"
				con.style.backgroundSize="cover"
			}, 300);

			posicionCaen[i]+=velocidad[i]
			con.style.translate="2vw "+posicionCaen[i]+"vh"
			

			if(posicionCaen[i]>60){
				posicionCaen[i]=0
				con.style.background="transparent"
				con.style.color="transparent"
				con.style.translate="2vw "+posicionCaen[i]+"vh"
				let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
				con.innerHTML=copia[copia.length-1]
				actualizarVector(copia,numero)
				actualizarNumeros()

			}
		}
		else if(i==1){
			setTimeout(() => {
  			con.style.background="url(img/nube.png)no-repeat"
				con.style.color="royalblue"
				con.style.backgroundSize="cover"
			}, 300);			
			posicionCaen[i]+=velocidad[i]
			con.style.translate="12vw "+posicionCaen[i]+"vh"
			if(posicionCaen[i]>60){
				posicionCaen[i]=0
				con.style.background="transparent"
				con.style.color="transparent"
				con.style.translate="12vw "+posicionCaen[i]+"vh"
				let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
				con.innerHTML=copia[copia.length-1]
				actualizarVector(copia,numero)
				actualizarNumeros()
			}
		}
		else if(i==2){
			setTimeout(() => {
  			con.style.background="url(img/nube.png)no-repeat"
				con.style.color="royalblue"
				con.style.backgroundSize="cover"
			}, 300);
			posicionCaen[i]+=velocidad[i]
			con.style.translate="22vw "+posicionCaen[i]+"vh"
			if(posicionCaen[i]>60){
				posicionCaen[i]=0
				con.style.background="transparent"
				con.style.color="transparent"
				con.style.translate="22vw "+posicionCaen[i]+"vh"
				let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
				con.innerHTML=copia[copia.length-1]
				actualizarVector(copia,numero)
				actualizarNumeros()
			}
		}
		else if(i==3){
			setTimeout(() => {
  			con.style.background="url(img/nube.png)no-repeat"
				con.style.color="royalblue"
				con.style.backgroundSize="cover"
			}, 300);
			posicionCaen[i]+=velocidad[i]
			con.style.translate="32vw "+posicionCaen[i]+"vh"
			if(posicionCaen[i]>60){
				posicionCaen[i]=0
				con.style.background="transparent"
				con.style.color="transparent"
				con.style.translate="32vw "+posicionCaen[i]+"vh"
				let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
				con.innerHTML=copia[copia.length-1]
				actualizarVector(copia,numero)
				actualizarNumeros()
			}
		}
		
	}
	bandera1=1
}

//guarda el numero seleccionado y sube el nuevo cuadro de caida
function moverNumero(seleccion) {
	let numeroM=document.getElementById(seleccion)
	let numeroSuma=numeroM.innerHTML
	acumulador(numeroSuma,seleccion)//////////////////////////////////////////////////////////////////////////////////////////////
	if(seleccion=="caida0"){
		setTimeout(() => {
			numeroM.style.background="url(img/nube.png)no-repeat"
			numeroM.style.color="royalblue"
			numeroM.style.backgroundSize="cover"
		}, 300);
		posicionCaen[0]=0
		numeroM.style.background="transparent"
		numeroM.style.color="transparent"
		numeroM.style.translate="2vw "+posicionCaen[0]+"vh"
		let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
		numeroM.innerHTML=copia[copia.length-1]
		actualizarVector(copia,numero)
		actualizarNumeros()	
	
	}
	if(seleccion=="caida1"){
		setTimeout(() => {
			numeroM.style.background="url(img/nube.png)no-repeat"
			numeroM.style.color="royalblue"
			numeroM.style.backgroundSize="cover"
		}, 300);
		posicionCaen[1]=0
		numeroM.style.background="transparent"
		numeroM.style.color="transparent"
		numeroM.style.translate="12vw "+posicionCaen[1]+"vh"
		let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
		numeroM.innerHTML=copia[copia.length-1]
		actualizarVector(copia,numero)
		actualizarNumeros()		
	}
	if(seleccion=="caida2"){
		setTimeout(() => {
			numeroM.style.background="url(img/nube.png)no-repeat"
			numeroM.style.color="royalblue"
			numeroM.style.backgroundSize="cover"
		}, 300);
		posicionCaen[2]=0
		numeroM.style.background="transparent"
		numeroM.style.color="transparent"
		numeroM.style.translate="22vw "+posicionCaen[2]+"vh"
		let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
		numeroM.innerHTML=copia[copia.length-1]
		actualizarVector(copia,numero)
		actualizarNumeros()		
	}
	if(seleccion=="caida3"){
		setTimeout(() => {
			numeroM.style.background="url(img/nube.png)no-repeat"
			numeroM.style.color="royalblue"
			numeroM.style.backgroundSize="cover"
		}, 300);
		posicionCaen[3]=0
		numeroM.style.background="transparent"
		numeroM.style.color="transparent"
		numeroM.style.translate="32vw "+posicionCaen[3]+"vh"
		let numero = numerosPosibles[Math.floor(Math.random() * numerosPosibles.length)]
		numeroM.innerHTML=copia[copia.length-1]
		actualizarVector(copia,numero)
		actualizarNumeros()		
	}

}
function acumulador(valor,sele){
	let nuevoNumero = document.createElement("div")
	nuevoNumero.textContent = valor;
	nuevoNumero.classList.add("newValor")
	//caida 0
	mover.play()
	if(posicionCaen[0]<=20 && sele=="caida0"){
		calculo1.appendChild(nuevoNumero)
	}
	else if(posicionCaen[0]>20 && posicionCaen[0]<=40 && sele=="caida0" ){
		calculo2.appendChild(nuevoNumero)
	
	}  
	else if(posicionCaen[0]>40 && sele=="caida0" ) {
		calculo3.appendChild(nuevoNumero)
	}

	//caida 1
	if(posicionCaen[1]<=20 && sele=="caida1"){
		calculo1.appendChild(nuevoNumero)
	}
	else if(posicionCaen[1]>20 && posicionCaen[1]<=40 && sele=="caida1" ){
		calculo2.appendChild(nuevoNumero)
		
	}  
	else if(posicionCaen[1]>40 && sele=="caida1" ) {
		calculo3.appendChild(nuevoNumero)	
	}
	//caida 2
		if(posicionCaen[2]<=20 && sele=="caida2"){
		calculo1.appendChild(nuevoNumero)
	}
	else if(posicionCaen[2]>20 && posicionCaen[2]<=40 && sele=="caida2" ){
		calculo2.appendChild(nuevoNumero)
	
	}  
	else if(posicionCaen[2]>40 && sele=="caida2" ) {
		calculo3.appendChild(nuevoNumero)
	}
	//caida 3
	if(posicionCaen[3]<=20 && sele=="caida3"){
		calculo1.appendChild(nuevoNumero)
	}
	else if(posicionCaen[3]>20 && posicionCaen[3]<=40 && sele=="caida3" ){
		calculo2.appendChild(nuevoNumero)
	
	}  
	else if(posicionCaen[3]>40 && sele=="caida3" ) {
		calculo3.appendChild(nuevoNumero)
	}


}
// sumador de puntos 1//////////////////////////////////////////////////////
function sumarContenidos1() {

	let hijos = calculo1.children;
	let suma = 0;

	for (let i = 0; i < hijos.length; i++) {
		let valor = parseInt(hijos[i].textContent);
			suma += valor;
	}
	if(suma==parseInt(zonaTotal1.innerHTML)){
		puntos+=10
		racha++
		bueno.play()
		pantallaMuerte()
		zonaPuntos.innerHTML="<spam>puntos:  </spam>"+puntos+"/"+racha
		if(racha>=2){
			racha=0
			tiempo+=30
			zonaTiempo.innerHTML="seg: "+	tiempo
		}
	}
	else{
		tiempo-=5
		malo.play()
		zonaTiempo.innerHTML="seg: "+	tiempo
	}
	numerosCalcul[0]= Math.floor((Math.random() * (11-4))+4)
	zonaTotal1.innerHTML=numerosCalcul[0]
	calculo1.innerHTML=" "
}
// sumador de puntos 2//////////////////////////////////////////////////////
function sumarContenidos2() {

	let hijos = calculo2.children;
	let suma = 0;

	for (let i = 0; i < hijos.length; i++) {
		let valor = parseInt(hijos[i].textContent);
			suma += valor;
	}
	if(suma==parseInt(zonaTotal2.innerHTML)){
		puntos+=10
		racha++
		bueno.play()
		pantallaMuerte()
		zonaPuntos.innerHTML="<spam>puntos:  </spam>"+puntos+"/"+racha
		if(racha>=2){
			racha=0
			tiempo+=30
			zonaTiempo.innerHTML="seg: "+	tiempo
		}
	}
	else{
		malo.play()
		tiempo-=5
		zonaTiempo.innerHTML="seg: "+	tiempo
	}
	numerosCalcul[1]= Math.floor((Math.random() * (11-4))+4)
	zonaTotal2.innerHTML=numerosCalcul[1]
	calculo2.innerHTML=" "
	

}
// sumador de puntos 3//////////////////////////////////////////////////////
function sumarContenidos3() {

	let hijos = calculo3.children;
	let suma = 0;

	for (let i = 0; i < hijos.length; i++) {
		let valor = parseInt(hijos[i].textContent);
			suma += valor;
	}
	if(suma==parseInt(zonaTotal3.innerHTML)){
		bueno.play()
		puntos+=10
		racha++
		zonaPuntos.innerHTML="<spam>puntos:  </spam>"+puntos+"/"+racha
		pantallaMuerte()
		if(racha>=2){
			racha=0
			tiempo+=30
			zonaTiempo.innerHTML="seg: "+	tiempo
		}
	}
	else{
		malo.play()
		tiempo-=5
		zonaTiempo.innerHTML="seg: "+	tiempo
	}
	numerosCalcul[2]= Math.floor((Math.random() * (11-4))+4)
	zonaTotal3.innerHTML=numerosCalcul[2]
	calculo3.innerHTML=" "
}

function contaTiempo() {
		tiempo-=1
		zonaTiempo.innerHTML="seg: "+	tiempo
		if(tiempo==0){
			zonaPuntos.style.display="none"
			zonaTiempo.style.display="none"
			zonaTotal1.style.display="none"
			zonaTotal2.style.display="none"
			zonaTotal3.style.display="none"
			zonaCaida.style.display="none"
			zonaEspera.style.display="none"
			zonaResul3.style.display="none"
			fin.style.display="flex"
			fin.innerHTML="Game Over <br>"+puntos+" puntos<br> Volver a jugar"
			clearInterval(juego)
			clearInterval(crono)
			zonaTitulo.style.color="white"
			zonaTitulo.innerHTML="NeoSumas"
			gameover.play()
			musica.pause()
			fin.addEventListener("click", jugarOtra);
		}
	
}
function pantallaMuerte() {
	if(puntos==50){
		velocidad[0]+=0.2
		velocidad[1]+=0.2
		velocidad[2]+=0.2
		velocidad[3]+=0.2
	}
	if(puntos==100){
		velocidad[0]+=0.3
		velocidad[1]+=0.3
		velocidad[2]+=0.3
		velocidad[3]+=0.3
	}
	if(puntos==150){
		velocidad[0]+=0.4
		velocidad[1]+=0.4
		velocidad[2]+=0.4
		velocidad[3]+=0.4
	}
	if(puntos==200){
		velocidad[0]+=0.5
		velocidad[1]+=0.5
		velocidad[2]+=0.5
		velocidad[3]+=0.5
	}
}

function jugarOtra(){
  location.reload();
}

function music() {
	fin.style.display="none"
	musica.play()
	bueno.play()
	inicio()
	zonaPuntos.style.display="flex"
	zonaTiempo.style.display="flex"
	zonaTotal1.style.display="flex"
	zonaTotal2.style.display="flex"
	zonaTotal3.style.display="flex"
	zonaCaida.style.display="flex"
	zonaEspera.style.display="flex"
	zonaResul3.style.display="flex"
}
