

    const titulo1="Comida";
    const titulo2="Turismo";
    const titulo3="Vegetação";
    const titulo4="Curiosidade";
    let tipo=1;
    var estado

    //info dos estados
    const dados = {    

      AC: { 
        nome: "Acre", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg", 
        audioDesc: "Som da floresta amazônica com pássaros e animais"

      },
      AM: { 
        nome: "Amazonas", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg", 
        audioDesc: "Som da floresta amazônica com animais e rios"
      },
      RR: { 
        nome: "Roraima", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg", 
        audioDesc: "Som de vento e pássaros do cerrado"
      },
      RO: { 
        nome: "Rondônia", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg", 
        audioDesc: "Som de festa junina com forró"
      },
      PA: { 
        nome: "Pará", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg", 
        audioDesc: "Som de Carimbó e festividades"
      },
      AP: { 
        nome: "Amapá", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg", 
        audioDesc: "Som de tambores do marabaixa"
      },
      TO: { 
        nome: "Tocantins", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg", 
        audioDesc: "Som de cavalos e festas tradicionais"
      },
      MA: { 
        nome: "Maranhão", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg", 
        audioDesc: "Som de tambores do Bumba Meu Boi"
      },
      PI: { 
        nome: "Piauí", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg", 
        audioDesc: "Som de forró e festas juninas",
        imagem1:"Piaui/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Piaui/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Piaui/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Piaui/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      CE: { 
        nome: "Ceará", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg", 
        audioDesc: "Som de forró pé-de-serra"
      },
      RN: { 
        nome: "Rio Grande do Norte", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg", 
        audioDesc: "Som de ondas do mar e forró",
        imagem1:"Rio grande do norte/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Rio grande do norte/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Rio grande do norte/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Rio grande do norte/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      PB: { 
        nome: "Paraíba", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg", 
        audioDesc: "Som de repente e viola"
      },
      PE: { 
        nome: "Pernambuco", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg", 
        audioDesc: "Som de frevo e maracatu"
      },
      AL: { 
        nome: "Alagoas", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg", 
        audioDesc: "Som de sururu sendo preparado"

      },
      SE: { 
        nome: "Sergipe", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg", 
        audioDesc: "Som de forró e festas juninas",
        imagem1:"Sergipe/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Sergipe/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Sergipe/vegetacao.jpg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Sergipe/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      BA: { 
        nome: "Bahia", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg", 
        audioDesc: "Som de axé e tambores do candomblé"
      },
      MT: { 
        nome: "Mato Grosso", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg", 
        audioDesc: "Som de viola de cocho e siriri",
        imagem1:"Mato grosso/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Mato grosso/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Mato grosso/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Mato grosso/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      MS: { 
        nome: "Mato Grosso do Sul", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg", 
        audioDesc: "Som de chamamé e natureza pantaneira",
        imagem1:"Mato grosso do sul/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Mato grosso do sul/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Mato grosso do sul/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Mato grosso do sul/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      GO: { 
        nome: "Goiás", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg", 
        audioDesc: "Som de viola caipira e folia do divino"
      },
      SP: { 
        nome: "São Paulo", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg", 
        audioDesc: "Som do trânsito e movimento da cidade"
      },
      RJ: { 
        nome: "Rio de Janeiro", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg", 
        audioDesc: "Som de samba e ondas do mar",
        imagem1:"Rio de janeiro/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Rio de janeiro/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Rio de janeiro/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Rio de janeiro/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      MG: { 
        nome: "Minas Gerais", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg", 
        audioDesc: "Som de viola e festas juninas",
        imagem1:"Minas/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Minas/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Minas/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Minas/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."

      },
      ES: { 
        nome: "Espírito Santo", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg", 
        audioDesc: "Som de congo e ondas do mar",
        imagem1:"Espirito santo/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Espirito santo/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Espirito santo/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Espirito santo/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      PR: { 
        nome: "Paraná", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg", 
        audioDesc: "Som de danças folclóricas europeias",
        imagem1:"Paran/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Paran/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Paran/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Paran/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      SC: { 
        nome: "Santa Catarina", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg", 
        audioDesc: "Som de música alemã e ondas do mar",
        imagem1:"Santa catarina/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Santa catarina/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Santa catarina/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Santa catarina/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      },
      RS: { 
        nome: "Rio Grande do Sul", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg", 
        audioDesc: "Som de gaita e fandango",
        imagem1:"Rio grande do sul/comida.jpeg",
        texto1:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem2:"Rio grande do sul/turismo.jpeg",
        texto2:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem3:"Rio grande do sul/vegetacao.jpeg",
        texto3:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado).",
        imagem4:"Rio grande do sul/curiosidade.jpeg",
        texto4:"A culinária de Sergipe é marcada por ingredientes como frutos do mar, camarão, carne de sol, carne de bode, milho e mandioca. Pratos típicos incluem a moqueca de camarão, o caruru, o sarapatel e o caranguejo (considerada a iguaria que mais representa o estado)."
      }
    };

    let audioContext = null;
    let noiseNode = null;
    let isPlaying = false;

    //abre as informações e fecha tbm
    function AbrirInfo(){
      document.getElementById("popup").style.display="flex";
    }
  
    function fecharInfo(){
      document.getElementById("popup").style.display="none";
    }

    //vai definir oq é a informação se é sobre comida,vegetação ou etc 
    function defineTema1(){
      titulop=titulo1
      imagemp=estado.imagem1
      textop=estado.texto1
    }
    function defineTema2(){
      titulop=titulo2
      imagemp=estado.imagem2
      textop=estado.texto2

    }
    function defineTema3(){
      titulop=titulo3
      imagemp=estado.imagem3
      textop=estado.texto3
    }
    function defineTema4(){
      titulop=titulo4
      imagemp=estado.imagem4      
      textop=estado.texto4
    }
    //exibi as info
    function defineElementos(){
      const defEle = document.getElementById('descricao');
      defEle.innerHTML=`          
        <button onclick='fecharInfo()' id='botaoFechar'>X</button>
        <p class='titulo'>${titulop}</p>  
        <p class='texto'>${textop}</p>
        <img src='${imagemp}' class='imagem'></img>
      `;
    } 
    
 


    //é oq acontece após licar em um estado
    function mostrar(uf) {
      estado = dados[uf];
      const infoDiv = document.getElementById('info');
      if (estado) {
        infoDiv.innerHTML = `
          <h2 class='titulo-estado' id="scroll">${estado.nome}</h2>
          <img class='bandeira' src='${estado.bandeira}' alt='Bandeira de ${estado.nome}'>
          <div class='audio-container'>
            <button id='audioBtn' class='audio-btn' onclick='toggleAudio()'>Ouvir Som Característico</button>
            <p class='audio-desc'>${estado.audioDesc}</p>
            <div class='organizahor'>
                <div class='organizaver'>
                    <div class='foto' onclick='AbrirInfo(); defineTema1(); defineElementos() '><img src="${estado.imagem1}"></img> <p>${titulo1}</p></div>
                    <div class='foto' onclick='AbrirInfo(); defineTema2(); defineElementos()'><img src="${estado.imagem2}"></img> <p>${titulo2}</p></div>    
                </div>
            
                <div  class='organizaver'>
                    <div class='foto' onclick='AbrirInfo(); defineTema3(); defineElementos()'><img src="${estado.imagem3}"></img> <p>${titulo3}</p></div>
                    <div class='foto' onclick='AbrirInfo(); defineTema4(); defineElementos()'><img src="${estado.imagem4}"></img> <p>${titulo4}</p></div>    
                </div>  
            </div>
          </div>
        `;        
        window.scrollTo({
          top: 1100, 
          behavior: 'smooth' 
        });
      }
  
    }    


    // partir daqui mexe com aúdio como não mexi nessa parte nem sei oq faz
    function toggleAudio() {
      if (isPlaying) {
        stopWhiteNoise();
      } else {
        playWhiteNoise();
      }
    }

    function playWhiteNoise() {
      try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const bufferSize = 2 * audioContext.sampleRate;
        const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        for (let i = 0; i < bufferSize; i++) {
          output[i] = Math.random() * 2 - 1;
        }
        
        noiseNode = audioContext.createBufferSource();
        noiseNode.buffer = noiseBuffer;
        noiseNode.loop = true;
        
        noiseNode.connect(audioContext.destination);
        noiseNode.start();
        
        isPlaying = true;
        document.getElementById('audioBtn').textContent = "Parar Som";
        document.getElementById('audioBtn').classList.add('playing');
      } catch (error) {
        console.error("Erro ao reproduzir áudio:", error);
        alert("Não foi possível reproduzir o áudio. Verifique as permissões do seu navegador.");
      }
    }

    function stopWhiteNoise() {
      if (noiseNode) {
        noiseNode.stop();
        noiseNode.disconnect();
        noiseNode = null;
      }
      
      if (audioContext) {
        audioContext.close();
        audioContext = null;
      }
      
      isPlaying = false;
      document.getElementById('audioBtn').textContent = "Ouvir Som Característico";
      document.getElementById('audioBtn').classList.remove('playing');
    }
