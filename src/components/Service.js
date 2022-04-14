import React, { useState, Component } from 'react';
import Header from './Header';


class Service extends React.Component {
  render() {

    const { values, handleChange } = this.props;

    const saveStateToLocalStorage = () => {
      localStorage.setItem('state', JSON.stringify(this.props));
    }


    return (
      <React.Fragment>
        <Header />
        <div className="px-16">
          <div className="grid w-full grid-cols-2 gap-4 px-2 py-2 ">
            <div className="flex gap-4 my-auto">
              <button className="flex w-20 py-4 my-auto text-center text-black border-2 rounded-md shadow-md border-bgBlue bg-bgBlue hover:bg-transparent hover:text-white focus:outline-none">
                <h1 className="mx-auto my-auto text-xs font-bold">Нов</h1>
              </button>
              <h1 className="my-auto text-lg font-bold text-white">Налог број / <span>{values.id}</span></h1>
              <h1 className="my-auto ml-20 text-xs font-bold text-white">Барај налог:</h1>
              <input className="w-20 px-2 py-1 text-xl text-center border rounded-md border-bgBlue focus:outline-none" ></input>
            </div>
            <div className="flex justify-end gap-4 my-auto">
              <button onClick={saveStateToLocalStorage()} className="px-3 py-3 my-auto text-center text-white bg-green-600 rounded-md shadow-md hover:bg-white hover:text-green-600 focus:outline-none">
                <svg className="mx-auto my-auto text-xs font-bold" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </button>
              <button className="px-3 py-3 my-auto text-center text-white bg-green-600 rounded-md shadow-md hover:bg-white hover:text-green-600 focus:outline-none">
                <svg className="mx-auto my-auto text-xs font-bold" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="w-full px-2 py-4 border rounded-md border-bgBlue">
            <div className="grid grid-cols-5 mx-auto">
              <div className="mx-auto my-auto">
                <p className="ml-1 text-xs font-bold text-white">Име и презиме</p>
                <input id={values.firstLastName}
                  onChange={handleChange('firstLastName')}
                  className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
                <p className="ml-1 text-xs font-bold text-white">Фирма</p>
                <input id={values.company}
                  onChange={handleChange('company')} className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
                <p className="ml-1 text-xs font-bold text-white">Адреса</p>
                <input id={values.addres}
                  onChange={handleChange('addres')} className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
                <p className="ml-1 text-xs font-bold text-white">Телефон</p>
                <input id={values.phoneNumber}
                  onChange={handleChange('phoneNumber')} className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
              </div>
              <div className="mx-auto my-auto">
                <p className="ml-1 text-xs font-bold text-white">Вид</p>
                <select class="form-select appearance-none block px-2 py-1 border rounded-md border-bgBlue focus:outline-none w-full bg-clip-padding transition ease-in-out
                              " aria-label="Default select example">
                  <option selected>Мобилен телефон</option>
                  <option value="1">Таблет</option>
                  <option value="2">Часовник</option>
                  <option value="3">Звучник</option>
                </select>
                <p className="ml-1 text-xs font-bold text-white">Марка</p>
                <input className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
                <p className="ml-1 text-xs font-bold text-white">Модел</p>
                <input className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
                <p className="ml-1 text-xs font-bold text-white">Сериски Број</p>
                <input className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></input>
              </div>
              <div className="mx-auto my-auto">
                <p className="ml-1 text-xs font-bold text-white">Опис на дефект</p>
                <textarea className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></textarea>
                <p className="ml-1 text-xs font-bold text-white">Додатни оштетувања</p>
                <textarea className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></textarea>
              </div>
              <div className="col-span-1 mx-auto my-auto">
                <div className="py-2">
                  <input className="inline-block" type="checkbox" />
                  <p className="inline-block ml-2 text-xs text-white">Прифатен Ризик</p>
                </div>
                <div className="py-2">
                  <input className="inline-block" type="checkbox" />
                  <p className="inline-block ml-2 text-xs text-white">Корисникот согласен за ризикот</p>
                </div>
                <div className="py-2">
                  <input className="inline-block" type="checkbox" />
                  <p className="inline-block ml-2 text-xs text-white">Да се зачуваат податоци од уредот</p>
                </div>
              </div>

              <div className="w-48 h-40 col-span-1 px-2 mx-auto my-auto overflow-auto bg-white rounded-md">
                <div className='px-1 my-2 text-sm border rounded-md hover:bg-bgBlue border-bgBlue'>
                  <h1 className='inline-block'>{values.id}</h1>
                  <h1 className='inline-block pl-2'>{values.firstLastName}</h1>
                </div>
              </div>

            </div>
          </div>



          <div className="w-full px-2 py-4 pb-4 mt-4 border rounded-md border-bgBlue">
            <div className="flex grid grid-cols-5 mx-auto">
              <div className="mx-auto ">
                <p className="ml-1 text-xs font-bold text-white">Сервисер</p>
                <select class="form-select appearance-none block px-2 py-1 border rounded-md border-bgBlue focus:outline-none w-full bg-clip-padding transition ease-in-out" aria-label="Default select example">
                  <option selected>Сервисер</option>
                  <option value="1">Филип</option>
                  <option value="2">Бобан</option>
                  <option value="3">Томе</option>
                </select>
                <p className="ml-1 text-xs font-bold text-white">Изјава од сервисер</p>
                <textarea className="px-2 py-1 border rounded-md border-bgBlue focus:outline-none" ></textarea>
                <div className="mx-auto my-auto">
                  <div className="py-2">
                    <input className="inline-block" type="checkbox" />
                    <p className="inline-block ml-2 text-white">Завршено</p>
                  </div>
                  <div className="py-2">
                    <input className="inline-block" type="checkbox" />
                    <p className="inline-block ml-2 text-white">Не се поправа</p>
                  </div>
                  <div className="py-2">
                    <input className="inline-block" type="checkbox" />
                    <p className="inline-block ml-2 text-white">Се чека дел</p>
                  </div>
                </div>
              </div>
              <div className="col-span-2 mx-auto ">
                <p className="ml-1 text-xs font-bold text-white">Сервис</p>
                <div className="flex gap-1">
                  <input className="px-2 py-1 border rounded-md iin border-bgBlue focus:outline-none" ></input>
                  <input className="w-24 px-2 py-1 text-center border rounded-md border-bgBlue focus:outline-none" placeholder="мкд" ></input>
                </div>
                <p className="ml-1 text-xs font-bold text-white">Материјал</p>
                <div className="flex gap-1">
                  <input className="px-2 py-1 border rounded-md iin border-bgBlue focus:outline-none"  ></input>
                  <input className="w-24 px-2 py-1 text-center border rounded-md border-bgBlue focus:outline-none" placeholder="мкд" ></input>
                </div>
                <div className='mt-2'>
                  <p className="inline-block mr-2 text-xs font-bold text-white">Вкупно: </p>
                  <input className="inline-block w-full px-2 py-1 text-center border rounded-md border-bgBlue focus:outline-none" placeholder="мкд" ></input>
                </div>
                <div className='mt-2'>
                  <input className="inline-block" type="checkbox" />
                  <p className="inline-block ml-2 text-white">Не се наплаќа</p>
                </div>
                <div className=''>
                  <input className="inline-block w-full px-2 py-1 text-center border rounded-md border-bgBlue focus:outline-none" placeholder="Причина за не наплата" ></input>
                </div>
              </div>


            </div>

          </div>
        </div>
      </React.Fragment >
    );
  }
}

export default Service;