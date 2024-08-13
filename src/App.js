import { useState } from 'react';
import './App.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
const list = [
  {
    name: 'Дебетовые карты',
    description: 'Суперкешбек',
    image: 'https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png'
  },
  {
    name: 'Кешбек за покупки',
    description: 'Кешбек за покупки',
    image: 'https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png'
  },
  {
    name: 'Накопления',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/25/51/1449/D_CardPromo_267_298_vertical_dc.png'
  },
  {
    name: 'Доход спервого месяца',
        description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/91/be/1449/D_CardPromo_267x298_230524.png'
  },
  {
    name: 'Накопления',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Доход спервого месяца',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Накопления',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Доход спервого месяца',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Накопления',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Доход спервого месяца',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Накопленияzzzz',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  },
  {
    name: 'Доход спервого месяца',
    description: 'Доход спервого месяца',
    image: 'https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'
  }
]

function App() {
  const [inputValue, setInputValue] = useState('');
  const [value, setValue] = useState(1);
  const [id, setId] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  console.log(id , ' our id');

    function sum(a, b, c){
    if (c === `вычетание`){ 
      return a - b
    }
    if  (c === `умножение`){
      return a*b
    }
    if (c === `деление`){
       return a / b        
  }
  return a + b
}

function lsp(f, g, l){
return f + g +l
}

let message = ``

function onClick(){
  console.log(message)
}

function Aos(){
  alert (message)
}

function Rtx(){
  alert (``)
}
function slak (){
alert (sum(Number(value), 3, `умножение`))
}

function src(value){
  setInputValue (value)
}
function openMenu(){
  
}
return (
  <div>
    {isOpen && (
      <div className='menu-moble'>
      <div className='spisok'>
            Документация
          </div>
          <div className='spisok'>
            Введение
          </div>
          <div className='spisok'>
            Блог
          </div>
          <a className='spisok1' href="https://ru.legacy.reactjs.org/community/support.html" >
            Сообщество
          </a>
          <div className='spisok'>
            Сообщество
          </div> 
      </div>
    )}
    <div className='background'>
  <div className='Menu grid'>
        
        <div className='spisok'>
          Документация
        </div>
        <div className='spisok'>
          Введение
        </div>
        <div className='spisok'>
          Блог
        </div>
        <a className='spisok1' href="https://ru.legacy.reactjs.org/community/support.html" >
          Сообщество
        </a>
        <div className='spisok'>
          Сообщество
        </div> 
        <div className='search'>
        <div className='input1' >
            <input className='input-top' placeholder='Поиск' onChange={(event) => src(event.target.value)} />
            
            </div>
        </div>
        
      </div>
      <div className='burger'>
          
          <button onClick={() => setIsOpen(!isOpen)}>
          <img className='burger-img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png'/>

          </button>
                            </div>
      </div>

    <div className="App grid" onClick={() => onClick()}>
      
       
      <div className='red'>
        <div className='orange'>
          <h1 className='yellow'>
            Выбирайте лучшее
          </h1>
          <div className='yellow2'>
            <button className={id === 1 ? `active green` : 'green'} onClick={() => setId(1)}>
              Для всех
            </button>
            <button className={id === 2 ? 'active green' : `green`} onClick={() => setId(2)}>
              Малому бизнесу
            </button>
            <button className={id === 3 ? 'active green' : `green`} onClick={() => setId(3)}>
              Крупному изнесу
            </button>
            
          </div>
        </div>

        {id === 1 && (
        <div className='blue'>
          {list.filter(item => {
            if (inputValue === '') {
              return item;
            }
            if (item.name === inputValue) {
              return item.name === inputValue;
            }
            return item;
          }).map((item, index) => (
                      <div className='violet1' key={index}>
                      <h2 className='sky-title'>
                        {item.name}
                      </h2>
                      <p className='sky-dicription'>
                        {item.description}
                      </p>
                      
                      <img className='sky-image' src={item.image} />
          
                    </div>
          ))}
        </div>
        )}

        {id === 2 && (
          <div className='blue'>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
          <div className='violet1'>
            <h2 className='sky-title'>
              Накопления
            </h2>
            <p className='sky-dicription'>
              Доход спервого месяца
            </p>
            <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
          </div>
        </div>
        )}
        

        {id === 3 && (
          
                    <div className='blue'>
                      <div className='violet1'>
                    <h2 className='sky-title'>
                      Накопления
                    </h2>
                    <p className='sky-dicription'>
                      Доход спервого месяца
                    </p>
                    <img className='sky-image' src='https://alfabank.servicecdn.ru/site-upload/e3/cf/2330/CardPromo_267x298_121123-2.png'/>
                  </div>
                  </div>
        )}
      </div>
      <div className='culc'>
        <div className='one'>
           <h1 className='title'>
            Подберите кредит
          </h1>
          <p>
          Получите предложения от банков за 5 минут
          </p>
          <div className='input' >
            <input placeholder='Введите сумму' onChange={(event) =>setValue(event.target.value) }/>
            <button className='ras' onClick={() => slak()}>
              расчитать
            </button>
            </div>
            
            
        </div>
        <img className='roon' src='https://static2.banki.ru/upload/ads/cred.png' />

      </div>
    </div>
    <div className='orange1 grid'>
      
      <div className='green1'>
            <div className='red1'>
              <img className='red-image' src='https://static4.banki.ru/ugc/72/a5/b6/579917724hkpaiJEnCghf.jpg'/>
        <div className='red-title'>
        Пять вкладов онлайн со ставкой выше рынка
      </div>
      </div>
      
      <div className='red1'> 
      <img className='red-image' src='https://static4.banki.ru/ugc/d6/6d/7b/579917711PlDFcIjAgOHg.jpg'/>
        <div className='red-title'>
        Как грамотно вести семейный бюджет? 5 способов
        </div>
        
      </div>
      <div className='red1'>
      <img className='red-image' src='https://static4.banki.ru/ugc/a7/73/74/Frame_2136138003lhPDIfdbAdIp.jpg'/>
        <div className='red-title'>
        Трехмесячные вклады все больше интересуют россиян
        </div>
      </div>
      </div>
      <div className='aqua'>
        <div className='blu'>
        Названы вклады с высокими ставками, которые можно открыть онлайн
        <p className='date'>
          19.02.23
        </p>
        </div>
        <div className='blu'>
        Россиянам рассказали, что важнее всего в семейных инвестициях
        <p className='date'>
          19.02.23
        </p>
        </div>
        <div className='blu'>
        Принцип «лесенки»: вкладчикам рассказали, как приумножить сбережения на депозитах
        <p className='date'>
          19.02.23
        </p>
        </div>
      </div>
      </div>
      </div>
    
    

  )  ;
}

export default App;
