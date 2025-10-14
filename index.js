

    const titulo1="Comida";
    const titulo2="Turismo";
    const titulo3="Vegetação";
    const titulo4="Curiosidade";
    let tipo=1;
    var estado

    const dados = {    


      AC: { 
        nome: "Acre", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Bandeira_do_Acre.svg", 
        cultura: "Estado da região Norte conhecido pela forte presença da cultura nordestina, com festividades como o aniversário do estado e a Feira de Exposições. A culinária local inclui pratos com peixes de água doce e frutas regionais.",
        audioDesc: "Som da floresta amazônica com pássaros e animais"

      },
      AM: { 
        nome: "Amazonas", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Bandeira_do_Amazonas.svg", 
        cultura: "Famoso pelo Festival Folclórico de Parintins, uma das maiores manifestações culturais do país. A culinária é baseada em peixes regionais como tambaqui e pirarucu, preparados com ingredientes da floresta.",
        audioDesc: "Som da floresta amazônica com animais e rios"
      },
      RR: { 
        nome: "Roraima", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/98/Bandeira_de_Roraima.svg", 
        cultura: "Estado com forte influência indígena, especialmente das etnias Yanomami e Macuxi. O Festival de Praia de Boa Vista é um dos principais eventos, celebrando as belezas naturais do estado.",
        audioDesc: "Som de vento e pássaros do cerrado"
      },
      RO: { 
        nome: "Rondônia", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Bandeira_de_Rond%C3%B4nia.svg", 
        cultura: "Conhecido pelo Arraial Flor do Maracujá, um dos maiores festejos juninos da região Norte. A culinária mescla influências nordestinas, paulistas e sulistas, com destaque para o churrasco pantaneiro.",
        audioDesc: "Som de festa junina com forró"
      },
      PA: { 
        nome: "Pará", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/02/Bandeira_do_Par%C3%A1.svg", 
        cultura: "Berço do Carimbó, dança de origem africana que deu origem à lambada e ao zouk. O Círio de Nazaré, em Belém, é uma das maiores procissões católicas do mundo. A culinária paraense é famosa pelo açaí e pelo pato no tucupi.",
        audioDesc: "Som de Carimbó e festividades"
      },
      AP: { 
        nome: "Amapá", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Bandeira_do_Amap%C3%A1.svg", 
        cultura: "Estado com forte presença da cultura marabaixa, manifestação afro-brasileira que celebra a resistência negra. A culinária é rica em peixes e frutos do mar, com destaque para o camarão no bafo.",
        audioDesc: "Som de tambores do marabaixa"
      },
      TO: { 
        nome: "Tocantins", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Bandeira_do_Tocantins.svg", 
        cultura: "Conhecido pela Festa do Divino Espírito Santo e pela Cavalhada, representação medieval que acontece em cidades como Natividade. A culinária inclui pratos como arroz com pequi e guariroba.",
        audioDesc: "Som de cavalos e festas tradicionais"
      },
      MA: { 
        nome: "Maranhão", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/45/Bandeira_do_Maranh%C3%A3o.svg", 
        cultura: "Terra do Bumba Meu Boi, manifestação cultural que mistura teatro, música e dança, reconhecida como Patrimônio Cultural Imaterial da Humanidade. O Tambor de Crioula é outra expressão cultural importante.",
        audioDesc: "Som de tambores do Bumba Meu Boi"
      },
      PI: { 
        nome: "Piauí", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/33/Bandeira_do_Piau%C3%AD.svg", 
        cultura: "Conhecido pelas tradições juninas, especialmente em Campo Maior, que realiza um dos maiores carnavais fora de época do Nordeste. A culinária inclui a carne de sol e a panelada.",
        audioDesc: "Som de forró e festas juninas"
      },
      CE: { 
        nome: "Ceará", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Bandeira_do_Cear%C3%A1.svg", 
        cultura: "Terra do humor e do forró, com grandes festivais como o Ceará Music. A cultura cearense é marcada pela literatura de cordel, xilogravura e artesanato em renda. A culinária é famosa pela carne de sol e baião de dois.",
        audioDesc: "Som de forró pé-de-serra"
      },
      RN: { 
        nome: "Rio Grande do Norte", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/3/30/Bandeira_do_Rio_Grande_do_Norte.svg", 
        cultura: "Conhecido pelas belas praias e pelo Maior São João do Mundo, em Campina Grande. A cultura potiguar é marcada pelo artesanato em cerâmica e pela música, com destaque para o forró.",
        audioDesc: "Som de ondas do mar e forró"
      },
      PB: { 
        nome: "Paraíba", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Bandeira_da_Para%C3%ADba.svg", 
        cultura: "Terra do maior São João do Mundo, em Campina Grande, e do Repente, manifestação musical típica do Nordeste. A culinária paraibana inclui a galinha à cabidela e a rapadura.",
        audioDesc: "Som de repente e viola"
      },
      PE: { 
        nome: "Pernambuco", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/5/59/Bandeira_de_Pernambuco.svg", 
        cultura: "Berço do Frevo e do Maracatu, ritmos que animam o Carnaval de Recife e Olinda. A cultura pernambucana também é marcada pelo artesanato em barro e madeira. A culinária é famosa pelo bolo de rolo e pela carne de sol com macaxeira.",
        audioDesc: "Som de frevo e maracatu"
      },
      AL: { 
        nome: "Alagoas", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/8/88/Bandeira_de_Alagoas.svg", 
        cultura: "Terra do Guerreiro, folguedo natalino que mistura elementos indígenas, africanos e europeus. A culinária alagoana é famosa pelo sururu, molusco preparado com leite de coco e servido com pirão.",
        audioDesc: "Som de sururu sendo preparado"

      },
      SE: { 
        nome: "Sergipe", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Bandeira_de_Sergipe.svg", 
        cultura: "Conhecido pelo São João de Estância, um dos mais tradicionais do Nordeste, e pelo artesanato em renda e palha. A culinária sergipana inclui a moqueca e o caranguejo.",
        audioDesc: "Som de forró e festas juninas",
        imagem1:"Sergipe/WhatsApp Image 2025-10-06 at 12.05.01.jpeg",
        imagem2:"Sergipe/WhatsApp Image 2025-10-06 at 12.05.02 (1).jpeg",
        imagem3:"Sergipe/WhatsApp Image 2025-10-06 at 12.05.02 (2).jpeg",
        imagem4:"Sergipe/WhatsApp Image 2025-10-06 at 12.05.02.jpeg"
      },
      BA: { 
        nome: "Bahia", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/28/Bandeira_da_Bahia.svg", 
        cultura: "Berço do axé, do acarajé e do Carnaval de Salvador, considerado a maior festa de rua do mundo. A cultura baiana é marcada pelo candomblé, capoeira e pelo artesanato em couro e madeira.",
        audioDesc: "Som de axé e tambores do candomblé"
      },
      MT: { 
        nome: "Mato Grosso", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Bandeira_de_Mato_Grosso.svg", 
        cultura: "Estado com forte influência das culturas indígen, pantaneira e sulista. A Festa de São Benedito, em Cuiabá, é uma das principais manifestações culturais. A culinária inclui o pacu assado e a farofa de banana.",
        audioDesc: "Som de viola de cocho e siriri"
      },
      MS: { 
        nome: "Mato Grosso do Sul", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/64/Bandeira_de_Mato_Grosso_do_Sul.svg", 
        cultura: "Terra do chamamé, ritmo musical originário da fronteira com o Paraguai, e da cultura pantaneira. A culinária é baseada em carnes bovinas e peixes de água doce.",
        audioDesc: "Som de chamamé e natureza pantaneira"
      },
      GO: { 
        nome: "Goiás", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_Goi%C3%A1s.svg", 
        cultura: "Conhecido pelas Cavalhadas de Pirenópolis e pela Festa do Divino. A cultura goiana é marcada pela viola caipira e pelo cururu. A culinária inclui o arroz com pequi e o empadão goiano.",
        audioDesc: "Som de viola caipira e folia do divino"
      },
      SP: { 
        nome: "São Paulo", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bandeira_do_estado_de_S%C3%A3o_Paulo.svg", 
        cultura: "Centro cultural e econômico do país, com diversidade de influências de imigrantes italianos, japoneses, árabes e outros. Conhecido pela Avenida Paulista, Museus e pela pizza. A culinária paulista é uma mistura de tradições.",
        audioDesc: "Som do trânsito e movimento da cidade"
      },
      RJ: { 
        nome: "Rio de Janeiro", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/7/73/Bandeira_do_estado_do_Rio_de_Janeiro.svg", 
        cultura: "Famoso pelo samba, Carnaval e praias icônicas como Copacabana e Ipanema. A cultura carioca é marcada pela bossa nova, pelo futebol e pelo pão de açúcar. A culinária inclui a feijoada e o churrasco.",
        audioDesc: "Som de samba e ondas do mar"
      },
      MG: { 
        nome: "Minas Gerais", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Bandeira_de_Minas_Gerais.svg", 
        cultura: "Famoso pelo pão de queijo, feijão tropeiro e arquitetura colonial das cidades históricas. A cultura mineira é marcada pelo queijo, cachaça e pela música sertaneja. As festas juninas são muito tradicionais.",
        audioDesc: "Som de viola e festas juninas"
      },
      ES: { 
        nome: "Espírito Santo", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/4/43/Bandeira_do_Esp%C3%ADrito_Santo.svg", 
        cultura: "Conhecido pela Festa da Penha e pela culinária com influência italiana e africana. A moqueca capixaba, preparada em panela de barro, é o prato mais famoso. A cultura é marcada pelas bandas de congo.",
        audioDesc: "Som de congo e ondas do mar"
      },
      PR: { 
        nome: "Paraná", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/9/93/Bandeira_do_Paran%C3%A1.svg", 
        cultura: "Estado com forte influência europeia, especialmente alemã, italiana, polonesa e ucraniana. Conhecido pelas Cataratas do Iguaçu e pela Festa da Uva. A culinária inclui o barreado e o pierogi.",
        audioDesc: "Som de danças folclóricas europeias"
      },
      SC: { 
        nome: "Santa Catarina", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Bandeira_de_Santa_Catarina.svg", 
        cultura: "Estado com forte influência alemã, italiana e açoriana. Conhecido pela Oktoberfest de Blumenau e pelas praias. A culinária inclui o marreco com repolho roxo e o café colonial.",
        audioDesc: "Som de música alemã e ondas do mar"
      },
      RS: { 
        nome: "Rio Grande do Sul", 
        bandeira: "https://upload.wikimedia.org/wikipedia/commons/6/63/Bandeira_do_Rio_Grande_do_Sul.svg", 
        cultura: "Cultura gaúcha marcada pelo chimarrão, churrasco e danças tradicionais como o fandango. A Semana Farroupilha celebra as tradições gaúchas. A culinária inclui o arroz de carreteiro e o churrasco.",
        audioDesc: "Som de gaita e fandango"
      }
    };

    let audioContext = null;
    let noiseNode = null;
    let isPlaying = false;

    function AbrirInfo(){
      document.getElementById("popup").style.display="flex";
    }
  
    function fecharInfo(){
      document.getElementById("popup").style.display="none";
    }



    function defineTema1(){
      titulop=titulo1


    }
    function defineTema2(){
      titulop=titulo2

    }
    function defineTema3(){
      titulop=titulo3

    }
    function defineTema4(){
      titulop=titulo4

    }

    function defineElementos(){
      const defEle = document.getElementById('descricao');
      defEle.innerHTML=`          
        <button onclick='fecharInfo()' id='botaoFechar'>X</button>
        <p class='titulo'>${titulop}</p>   
        <p class='texto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      `;
    } 
    
 



    function mostrar(uf) {
      estado = dados[uf];
      const infoDiv = document.getElementById('info');
      if (estado) {
        infoDiv.innerHTML = `
          <h2 class='titulo-estado' id="scroll">${estado.nome}</h2>
          <img class='bandeira' src='${estado.bandeira}' alt='Bandeira de ${estado.nome}'>
          <p class='cultura-texto'>${estado.cultura}</p>
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
