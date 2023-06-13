import { useAppSelector } from "../../../../app/lib"
import { selectCredentials } from "../../../../entities/User/model"
import styles from "./CredentialsCard.module.scss"
import { FC } from "react"

export const CredentialsCard: FC = () => {
  const { username } = useAppSelector(selectCredentials)

  if (!username) {
    throw new Error("Such user does not exist")
  }

  return (
    <section className={styles.card}>
      <h1>Hello, {username}!</h1>
    </section>
  )
}
