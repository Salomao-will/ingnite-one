import style from './post.module.css'

export default function Post() {
  return (
    <article className={style.post}>

      <header>

        <div className={style.author}>

          <img className={style.avatar} src="https://github.com/Salomao-will.png" />

          <div className={style.authorInfo}>

            <strong>Salomas Dev</strong>

            <span>Web Developer</span>

          </div>

        </div>

        <time title='22 de Agosto de 2023' dateTime='2023-08-22'>Publicado há 1h</time>

      </header>

      <div className={style.content}>

        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">{' '} jane.design/doctorcare</a></p>

        <p><a href="">
          #novoprojeto {' '}
          #nlw {' '}
          #rocketseat</a></p>

      </div>

    </article>
  )
}