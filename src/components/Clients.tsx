import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`my-4 ${styles.flexCenter}`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div
            className={`flex-1 ${styles.flexCenter} min-w-[120px] sm:min-w-[192px]`}
            key={client.id}
          >
            <img
              src={client.logo}
              alt="clinet"
              className="w-[100px] max-sm:my-2 sm:w-[192px] object-contain hover:brightness-200"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Clients
