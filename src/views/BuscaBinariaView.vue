<template>
  <div>
    
   
       <ModalConsulta
        v-show="isModalVisible"
        @closeModalCadastro="closeModal"
        @mandouArray="mandouArray"
        @mandouValor="mandouValor"
        
      />
      <div class="modal-backdrop fade show" v-show="isModalVisible"></div> 
  

    <NavComponente/>
    <h1>Atualize a página(F5) caso enfrente problemas</h1>
    <transition name="fade">
    <div  class="container">
      <div  class="boxcontainer"> 
        <div  v-bind:id=" `box${index}`" class="box" v-for="(elemento, index) in elementos" :key="index" >
          {{elemento}}
        </div>
        
        <div id="i"><div id="borda"></div>i</div>
        <div id="j"><div id="borda"></div>j</div>
        <div id="box_i">meio:</div>
        <div id="box_esquerda">esquerda:</div>
        <div id="box_direita">direita:</div>
        <!-- <div id="box_j">j:</div> -->
        <div id="valor_i"></div>
        <div id="valor_esquerda"></div>
        <div id="valor_direita"></div>
        <!-- <div id="valor_j"></div> -->
        <!-- <div id="min">min</div> -->
        <!-- <b-img :src="require('../assets/selectionsort.png')"></b-img> -->
        <!-- <img src="@/assets/selectionsort.png" /> -->
    
        
    
        
        
      </div>
      <div  class="imagemContainer">
        <img  src="@/assets/buscaBinaria.png" alt="Selection Sort" width="500" height="500" />
        <div id="bordacodigo"></div>
      </div>





      <!-- <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src="@/assets/bubbleSort.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/selectionsort.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="@/assets/iconmonstr-sort-25.png" alt="Third slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div id="bordacodigo"></div> -->
      <!-- <div  class="imagemContainer">
        <img  src="@/assets/bubbleSort.png" alt="Bubble Sort" width="700" height="500" />
        <div id="bordacodigo"></div>
      </div> -->
      <!-- <input @click="selectionSort" type="submit" class="btn btn-primary" data-toggle="button" value="Ordenar"/> -->
    </div>
    </transition>
    
    <input  v-show="!ordenou" @click="BuscaBinaria" type="submit" class="btn btn-primary mr-2" data-toggle="button" value="Buscar"/>
    <input v-show="ordenou" @click="reverter" type="submit" class="btn btn-primary mr-2" data-toggle="button" value="Reverter"/>
    <input v-show="ordenou" @click="pausar" type="submit" class="btn btn-primary mr-2" data-toggle="button" value="Pausar/Continuar"/>
    <!-- <button @click="selectionSort">Ordenar</button> -->
  
    
    
  </div>
  
  
  
  </template>
  
  <script>
  
  import { gsap } from "gsap";
  import { TextPlugin } from "gsap/TextPlugin";
  
  gsap.registerPlugin(TextPlugin);
  
  import ModalConsulta from "../components/Modais/ModalSearch.vue"
  import Vue from 'vue'
  
  var tl = gsap.timeline()
  
  export default {
    components: { ModalConsulta },
    name: 'HomeView',
    data() {
      return {
        larguraDaTela: window.innerWidth,
        isModalVisible: true,
        elementos:[4,3,2,1],
        oredenados:[1,2,3,4],
        show:false,
        ordenou:false,
        meuValor: ''
      };
    },
    mounted() {
      this.show=!this.show
  
      gsap.set("#bordacodigo",{scale: 0}) //borda do codigo
      gsap.set("#i",{scale: 0})//retangulo que representa a variavel i
      gsap.set("#j",{scale: 0}) //retangulo que representa a variavel i
      gsap.set("#box_i",{scale: 0})//letra i
      gsap.set("#box_j",{scale: 0})//letra j
  
      // for (var i = 0; i < this.elementos.length; i++) {
      //   gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});
  
      // }
    },
    created(){
  
    },
    methods: {
        sort(items) { 
          let n = items.length;    
          for(let i = 0; i < n; i++) {
              let min = i;
              for(let j = i+1; j < n; j++){
                  if(items[j] < items[min]) {
                      min=j; 
                  }
              }
              if (min != i) {
                  let tmp = items[i]; 
                  items[i] = items[min];
                  items[min] = tmp;      
              }
          }
      },
      mandouArray(array){
          console.log("mandou o array")
          console.log(array)
          console.log(array.length)
          this.elementos=[]
          this.oredenados=[]
          for(let i=0;i<array.length;i++){
              this.$set(this.elementos, i, array[i])
              this.oredenados.push(array[i])
          }
          sort(this.oredenados)
          console.log("elementos "+this.elementos)
          console.log("oredenados "+this.oredenados)
          console.log("elementos "+this.elementos)
          console.log("oredenados "+this.oredenados)
        
      },
      mandouValor(valorProcurado){
          this.meuValor = valorProcurado;
          console.log("valor procurado: "+this.meuValor)
      },
      pausar(){
        tl.paused(!tl.paused())
      },
      reverter(){
        tl.reversed(!tl.reversed())
        if(tl.paused()){
          tl.paused(!tl.paused())
        }
      },
      showModal() {
        this.isModalVisible = true;
      },
  
      closeModal() {
        this.isModalVisible = false;
      },

     
      
      BuscaBinaria() {
      this.ordenou=true
      tl.set("#bordacodigo",{scale: 1.0})
      tl.to( "#bordacodigo", { y:-41.6666666667*5.5  });//controle da linha que le o codigo
      tl.to( "#bordacodigo", { y:-41.6666666667*4.5  });//controle da linha que le o codigo
      //  for (var i = 0; i < this.elementos.length; i++) {
      //    gsap.set(`#box${this.oredenados.indexOf(this.elementos[i])}` ,{ x: (i-this.oredenados.indexOf(this.elementos[i]))*100});
      //  }//esse for é a primeira animação e é responsaável por desordenar o vetor mostrado na tela. multiplicado por 100, que é a largura do elemento HTML
      
      
        var length = this.elementos.length;//variavel tamanho do vetor  
        var esquerda = 0;
        var direita = length-1;
        var meio = Math.ceil((esquerda + direita)/2);
        while(esquerda <= direita){ 
          meio = Math.ceil((esquerda + direita)/2)
          tl.to( "#bordacodigo", { y:-41.6666666667*3.5  });//controle da linha que le o codigo
          tl.set("#i",{scale: 1})//box que seleciona o valor de i(animacao)
          tl.fromTo( "#i",{ x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(meio-1)) }, { x:( -0.5*(this.elementos.length-1)*document.querySelector(".box").offsetWidth+document.querySelector(".box").offsetWidth*(meio))  });
          //o trecho de cogio acima cria a animacao de entrada da caixa de seleção (quadrado que seleciona) a variavel i
          gsap.set("#box_i",{scale: 1})//tamanho da letra i, que marca o valor da variavel
          gsap.set("#box_j",{scale: 1})//tamanho da letra j, que marca o valor da variavel
          gsap.set("#valor_i",{scale: 1})//tamanho do numero que i armazena
          gsap.set("#valor_j",{scale: 1})//tamanho do numero que j armazena
          gsap.set("#box_i",{y: 100})//posicao da letra i
          gsap.set("#box_j",{y: 100})//posicao da letra j
          gsap.set("#valor_i",{y: 100})//posicao no eixo y do valor que a variavel i armzena
          gsap.set("#valor_j",{y: 100})//posicao no eixo y do valor que a variavel j armzena
          gsap.set("#valor_i",{x: -90})//posicao no eixo x do valor que a variavel i armzena
          gsap.set("#valor_j",{x: 110})//posicao no eixo x do valor que a variavel j armzena
          gsap.set("#valor_esquerda",{x: -90})
          gsap.set("#valor_direita",{x: -90})
          gsap.set("#valor_esquerda",{y: 150})
          gsap.set("#valor_direita",{y: 200})
          gsap.set("#box_i",{x:- 120})//posicao no eixo x da letra i 
          gsap.set("#box_j",{x: 80}) //posicao no eixo x da letra j
          tl.to("#valor_i", {
          text: {
              value: String(meio),//mostra na tela o valor que a variavel i armazena
          },
          });
          tl.to("#valor_esquerda", {
          text: {
              value: String(esquerda),//mostra na tela o valor que a variavel i armazena
          },
          });
          tl.to("#valor_direita", {
          text: {
              value: String(direita),//mostra na tela o valor que a variavel i armazena
          },
          });




          
          
          if(this.elementos[meio]==this.meuValor){
            tl.to(`#box${this.oredenados.indexOf(this.elementos[meio])}`, { 
                duration: 0.3,
                backgroundColor: 'green',
                yoyo: true,
                repeat: 2,
              });
            return meio;

          }
          else if(this.elementos[meio]>this.meuValor){
            direita = meio - 1;
            for(var i=direita+1; i<length;i++){
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
                duration: 0.3,
                backgroundColor: 'blue',
              });
            }
          }else{
            esquerda = meio + 1;
            for(var i=0; i<esquerda;i++){
              tl.to(`#box${this.oredenados.indexOf(this.elementos[i])}`, { 
                duration: 0.3,
                backgroundColor: 'blue',
              });
            }
          }
        }
    }
  


    }
    
  }
  
  </script>
  
  <style scoped>
  .box {
    background-color: red;
    height: 100px;
    width: 100px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 80px;
    position: static;
    border-radius: 25px;
  }
  .boxcontainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    width: 700px;
    color: blue
    
  
  } 
  .container {
  
    display: flex;
     align-items: center;
     justify-content: space-between;
     
  } 
  .imagemContainer{
      display: flex;
     align-items: center;
     justify-content: center;
     width: 50rem;
     
  }
  #i{
    position:absolute;
    font-size: 50px;
    margin-top:70px
  }
  #j{
    position:absolute;
    font-size: 50px;
    margin-top:70px
  }
  #box_i{
  position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 70px; 
  left: 50%;  */
  transform: translateX(-50%); 
  }
  #box_esquerda{
  position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 70px; 
  left: 50%;  */
  left: -20%;
  right: 35%;
  top: 60%;
  }
  #box_direita{
    position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 70px; 
  left: 50%;  */
  left: -20%;
  right: 31%;
  top: 65%;
  }
#box_j{
  position:absolute;
  font-size: 50px;
  margin-top:70px
}
#valor_i{
  position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 140px;
  left: 50%;
  transform: translateX(-50%);*/
}
#valor_direita{
  position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 140px;
  left: 50%;
  transform: translateX(-50%);*/
}
#valor_esquerda{
  position:absolute;
  font-size: 50px;
  margin-top:70px;
  /* top: 140px;
  left: 50%;
  transform: translateX(-50%);*/
}
#valor_j{
  position:absolute;
  font-size: 50px;
  margin-top:70px
}
  #borda{
    background-color: white;
    border-style: solid;
    border-width: 4px;
    height: 100px;
    width: 100px;
    opacity:0.5;
    border-radius: 25px;
  }
  
  #bordacodigo{
    height: 41.6666666667px;
    width: 500px;
    position:absolute;
    background-color: white;
    border-style: solid;
    border-width: 4px;
    opacity:0.5;
  }
  
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  .fade-enter-from{
    opacity: 0;
  } 
  .fade-enter-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 1;
  }
  .fade-enter-active /* .fade-leave-active below version 2.1.8 */ {
    transition: all 2s ease;
  }
  
  
  
  </style>