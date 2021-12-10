export const Greeting = ({userName, numOfMessages}) => {
  let isMorning = (new Date()).getHours() < 12

  if (!userName) return null

  return (
    isMorning 
    ?
    <>
      <h3>Доброе утро, {userName}!</h3>
      <p>У вас {numOfMessages} новых сообщений.</p>
    </>
    :
    <>
      <h3>Добрый вечер, {userName}!</h3>
      <p>У вас {numOfMessages} новых сообщений.</p>
    </>
  )
}