import { html, css, LitElement, customElement, property } from 'lit-element';
import { config } from './_config';

@customElement('snapbot-button')
// @ts-ignore
class SnapbotButton extends LitElement {
  @property({type: String}) icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADJCAYAAABmBH07AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA+tpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA3LTIzVDE1OjU4OjE2LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNy0yM1QxNzo0NzoxOC0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNy0yM1QxNzo0NzoxOC0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjJDNzNCOERDRDI1MTFFQUE1NjI5QkEyMjUyNjEyMDUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjJDNzNCOEVDRDI1MTFFQUE1NjI5QkEyMjUyNjEyMDUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RS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"
  @property({type: String}) hash = '';
  @property({type: String}) title = 'Estamos online!';
  @property({type: String}) message = 'Fala com o nosso robô';
  @property({type: String}) type = 'full';
  @property({type: String}) button = 'INICIAR ATENDIMENTO';
  @property({type: String}) textCancel = 'Não quero falar pelo WhatsApp!';
  @property({type: Number}) accountNumber = '';
  @property({type: String}) cc = '55';

  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--snapbot-widget-text-color, #000);
    }
    .snapbot-whtasapp-icon{
      padding: 15px;
      position: fixed;
      right: 35px;
      bottom: 35px;
      cursor: pointer;
      -webkit-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -moz-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -ms-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      -o-transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
      transition: all .5s cubic-bezier(.190, 1.000, .220, 1.000);
    }
    .snapbot-whtasapp-icon:hover{
      -webkit-transform: scale(1.3);
      -moz-transform: scale(1.3);
      -ms-transform: scale(1.3);
      -o-transform: scale(1.3);
      transform: scale(1.3);
    }

    @media (pointer: coarse) {
      .snapbot-whtasapp-icon{
         width:20%;
         right: 5px;
         bottom: 5px;
      }
    }

    #container-snapbot{
      width: 320px;
      height: 400px;
      position: fixed;
      right: 25px;
      bottom: -500px;
      background: transparent;
      -webkit-box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      -moz-box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      box-shadow: -1px 2px 33px -2px rgba(0,0,0,0.41);
      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
      font-family: 'Roboto', sans-serif;
    }
    #container-snapbot #header-snapbot{
      height: 7%;
      background: #00E676;
      padding: 7% 10% 15%;
      border-radius: 10px 10px 0px 0px;
      -moz-border-radius: 10px 10px 0px 0px;
      -webkit-border-radius: 10px 10px 0px 0px;
      border: 0px solid #000000;
      border-top-right-radius: 30px;
    }
    #container-snapbot #header-snapbot #detalhe-snapbot{
      width: 25px;
      height: 25px;
      background: #fff;
      position: absolute;
      right: 0;
      top: 0;
      border-bottom-left-radius: 65px;
      border-top-right-radius: 65px;
    }
    #container-snapbot #header-snapbot #snapbot-icon{
       width: 20%;
       float: left;
    }
    #container-snapbot #header-snapbot #text-content-snapbot{
      width: 75%;
      float: left;
      height: 50px;
      padding: 8px 0 5px 5px;
    }
    #container-snapbot #header-snapbot #titulo-snapbot{
      text-align:left;
      font-size: 20px;
      letter-spacing: -1px;
      color: #fff;
      font-weight: bolder;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: Ellipsis;
    }

    #container-snapbot #header-snapbot #mensagem-snapbot{
      text-align:left;
      font-size: 14px;
      letter-spacing: -1px;
      color: #fff;
      margin: 0;
      padding: 0;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: Ellipsis;
    }


    #container-snapbot #header-snapbot .dark{
      color:#383838;
    }
    #container-snapbot #header-snapbot .white{
      color:#fff;
    }
    #container-snapbot #header-snapbot img{
      width: 100px;
    }
    #container-snapbot #content{
      height: 60%;
      background: #fff;
      padding: 10%;
    }
    #container-snapbot #content form input{
      width: 90%;
      height: 40px;
      border: 1px solid #f1f1f1;
      border-radius: 5px;
      font-family: 'Roboto', sans-serif;
      padding: 0 5%;
      font-size: 16px;
    }

    #container-snapbot #content form input:focus{
      animation: treme 0.1s;
      animation-iteration-count: 2;
    }

    @keyframes treme {
      0% {margin-left: 0;}
      25% {margin-left: 2px;}
      50% {margin-left: 0;}
      75% {margin-left: -2px;}
      100% {margin-left: 0;}
   }

    #container-snapbot #content form #name-snapbot{
       margin-bottom: 10px;
    }
    #container-snapbot #content form #action-snapbot{
      width: 100%;
      height: 50px;
      background: #00BF54;
      font-size: 16px;
      padding: 10px 0;
      border: 1px solid #ccc;
      border-radius: 5px;
      color: #fff;
      margin-top: 5%;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      cursor: pointer;
    }
    #container-snapbot #content form #action-snapbot:hover{
      background: #00bf96;
    }
    #container-snapbot #content .shadow{
      -webkit-box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
      -moz-box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
      box-shadow: 0px 0px 14px -1px rgba(0,0,0,0.41);
    }
   #container-snapbot #content #output-snapbot{
      padding: 10% 0;
   }
   #container-snapbot #content #output-snapbot hr{
      width: 10%;
      text-align: center;
      opacity: 0.5;
   }
   #container-snapbot #content #output-snapbot #text-output-snapbot{
      text-align: center;
      font-size: 12px;
      opacity: 0.5;
      cursor: pointer;
   }
   #container-snapbot #content #output-snapbot #text-output-snapbot:hover{
      color: #00E676;
   }
  `;

  constructor() {
    super();
  }
  
  render() {
    return html`
      <img id="icon-wpp" @click="${this.__clickIcon}" src="${this.icon}" class="snapbot-whtasapp-icon" width="90px" style="opacity: 0">

      <div id="container-snapbot">
        <div id="header-snapbot">
            <div id="detalhe-snapbot"></div>
            <img src="${this.icon}" id="snapbot-icon">
            <div id="text-content-snapbot">
              <p id="titulo-snapbot">${this.title}</p>
              <p id="mensagem-snapbot">${this.message}</p>
            </div>
            
        </div>
        <div id="content">
            <form @submit="${this.__submit}" action="post">
              <input name="name" type="text" id="name-snapbot" placeholder="Nome" required>
              <input name="phone" @keyup="${this.__mascara}" maxlength="15" type="tel" pattern="[(][0-9]{2}[)][ ][0-9]{4}[-][0-9]{4,}" name="phonenumber-snapbot" placeholder="(99) 99999-9999" required>
              <button @submit="${this.__sendForm}" id="action-snapbot" class="shadow">${this.button}</button>
            </form>
            <div id="output-snapbot">
              <hr>
              <p @click="${this.__cancelForm}" id="text-output-snapbot">Não quero falar pelo WhatsApp.</p>
            </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.loadConfig();
  }

  
  async loadConfig() {
    let result:any = await fetch(`${config.baseUrl}/widget/load`, {
      method: 'get',
      headers:{
        'X-HASH-Widget':this.hash,
        'Accept':'application/json'
      }
    }).catch((err) => {
      console.log(err);
    });

    let data = await result.json();
    if(typeof data.data.configuration.type != 'undefined')
      this.type = data.data.configuration.type;
    if(typeof data.data.configuration.title != 'undefined')
      this.title = data.data.configuration.title;
    if(typeof data.data.configuration.message != 'undefined')
      this.message = data.data.configuration.message;
    if(typeof data.data.configuration.button != 'undefined')
      this.button = data.data.configuration.button;
    if(typeof data.data.configuration.textCancel != 'undefined')
      this.textCancel = data.data.configuration.textCancel;
    if(typeof data.data.configuration.icon != 'undefined')
      this.icon = data.data.configuration.icon;
    this.accountNumber = data.data.account_number;
    
    if(this.shadowRoot) {
      let butt = this.shadowRoot.getElementById('icon-wpp');
      this.__fadeIn(butt,1);
    }
  }

  async getLinkToRedirect() {
    let result:any = await fetch(`${config.baseUrl}${config.linkRedirect}`, {
      method: 'get',
      headers:{
        'X-HASH-Widget':this.hash,
        'Accept':'application/json'
      }
    }).catch((err) => {
      console.log(err);
      return;
    });

    let data = await result.json();
    window.open(data.data.link);
  }

  async sendForm(form: any) {
    let formData = new FormData(form);
    formData.set('phone',`${this.cc}${formData.get('phone')}`);
    let result:any = await fetch(`${config.baseUrl}${config.linkActive}`, {
      method: 'post',
      headers:{
        'X-HASH-Widget':this.hash,
        'Accept':'application/json'
      },
      body:formData
    }).catch((err) => {
      console.log(err);
      return;
    });

    let data = await result.json();
    console.log(data);
  }

  __clickIcon(event: any) {
    switch(this.type) {
      case 'full':
        if(this.shadowRoot) {
          let form = this.shadowRoot.getElementById('container-snapbot');
          this.__fadeOut(event.target, 0.5);
          this.__openForm(form,1);
        }
        break;
      case 'basic':
        this.getLinkToRedirect();
        break;
    }
  }

  __sendForm() {
    if(this.shadowRoot) {
      let icon = this.shadowRoot.getElementById('icon-wpp');
      let form = this.shadowRoot.getElementById('container-snapbot');
      this.__fadeIn(icon, 0.5);
      this.__closeForm(form,1);
    }
  }

  __cancelForm() {
    if(this.shadowRoot) {
      let icon = this.shadowRoot.getElementById('icon-wpp');
      let form = this.shadowRoot.getElementById('container-snapbot');
      this.__closeForm(form,0.5);
      this.__fadeIn(icon, 1);
    }
  }
  
  __openForm(form: any,time = 0.5) {
    this.__fadeIn(form, time);
    setTimeout(() => {
      form.style.bottom = 0;
    },500) 
  }

  __closeForm(form: any,time = 0.5) {
    this.__fadeOut(form, time);
    let timeByIncrement = (500/10)/time;

    let startBottom = 0;
    let endBottom = -500;
    let intervalo = setInterval(function(){
      if(startBottom <= endBottom){
        clearInterval(intervalo);
      }else {
        form.style.bottom -= 10;
      }
    },timeByIncrement);
  }

  __fadeIn(element:any, time: number) {
    this.__processFade(element,time,0,100);
  }

  __fadeOut(element:any, time: number) {
    this.__processFade(element,time,100,0);
  }

  __processFade(element: any, time: number, initial: number, end: number) {
    let increment: number;
    if(initial == 0){
      increment = 2;
      element.style.display = "block";
    }else {
      increment = -2;
    }
    
    let opc = initial;
    let intervalo = setInterval(function(){
      if((opc == end)){
        if(end == 0){
          element.style.display = "none";
        }
        clearInterval(intervalo);
      }else {
        opc += increment;
        element.style.opacity = opc/100;
        element.style.filter = "alpha(opacity="+opc+")";
      }
    },time * 10);
  }

  __mascara(event: any) {
    this.__telefone(event.target);
  }

  __telefone(element:any){
    let value = element.value;
    value=value.replace(/\D/g,"")                 //Remove tudo o que não é dígito
    value=value.replace(/^(\d\d)(\d)/g,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    value=value.replace(/(\d{4})(\d)/,"$1-$2")    //Coloca hífen entre o quarto e o quinto dígitos
    element.value = value;
    return value;
  }

  __submit(event: MouseEvent) {
    event.preventDefault();
    this.sendForm(event.target);
  }

}
export { SnapbotButton };
