import Layout from '@/shared/layout/layout'
import { useState } from 'react'
import { useRouter } from 'next/router';
import s from '@/styles/Home.module.scss'

export default function Home() {
  const router = useRouter();

  const [code, setCode] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleInput = (value) => {
    setCode(value);

    if (value.length !== 10 ||
      value.toLowerCase() === value ||
      !value.includes('?') ||
      !/[0-9]/.test(value)
    ) {
      setIsValid(false);
      return;
    };

    setIsValid(true);
  };

  const handleClick = () => {
    router.push('/users');
  }

  {/* Как я понял, приложение нужно вообще простое, поэтому оно в общем даже без архитектуры, какого-то конфига, линтеров, разбиения на переиспользуемые сущности или хотя бы css-переменных и тд
  Также по поводу бесконечного списка users, я работал с react-virtualized и хорошо знаю это библиотеку, если она нужна была, могу написать на ней, но я как понял по заданию нужна была просто пагинация и всё
  Не знаю, что именно нужно от задания, для того, чтобы что-то сложное по коду имело смысл реализовывать нужно больше функционала, тут поэтому просто набросал быстро через create-app даже не настраивая webpack, хотя обычно я это вручную делаю
*/}
  return (
    <Layout>
        <div className={s.content}>
          <h1 className={s.title}>Запросить пользователей</h1>
          <p className={s.description}>Введите 10-ти значный код, чтобы запросить пользоваталей GitHub</p>
          <input 
            className={s.input}
            placeholder='Введите 10-значный код'
            type="text"
            value={code}
            onChange={(e) => handleInput(e.target.value)} 
            />
          <button 
            onClick={handleClick}
            href="/users"
            className={`${s.button} ${isValid && s.active}`}
            disabled={!isValid}
            >
            Запросить
          </button>
        </div>
    </Layout>
  )
}
