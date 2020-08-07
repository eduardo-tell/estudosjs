import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import './styles.css';
import whatsapp from '../../assets/images/icons/whatsapp.svg';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponiveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">
                            Materia
                        </label>
                        <input type="text" id="subject"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="week-day">
                            Dia da semana
                        </label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">
                            Hora
                        </label>
                        <input type="text" id="time"/>
                    </div>
                </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                   <header>
                        <img src="https://instagram.ffln8-1.fna.fbcdn.net/v/t51.2885-19/s150x150/74655688_405700253684361_8293444834824290304_n.jpg?_nc_ht=instagram.ffln8-1.fna.fbcdn.net&_nc_ohc=8ITf_v3ELksAX_mXEzs&oh=20fd1b39f00d991b2f706cd5a7654032&oe=5F566758" alt="Eduardo Tell"/>
                        <div>
                            <strong>Eduardo Tell</strong>
                            <span>Desenvolvedor</span>
                        </div>
                   </header>
                   <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea suscipit numquam necessitatibus facere soluta illo est veritatis quasi corrupti provident. Doloremque minus explicabo dolorum aspernatur officia maiores quod consequatur laudantium?</p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 60,00</strong>
                            <img src={whatsapp} alt="Entrar em contato"/>
                            Entrar em contato
                        </p>
                    </footer>
               </article>
           </main>
        </div>
    )
}

export default TeacherList;