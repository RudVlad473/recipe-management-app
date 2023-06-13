import { useBooleanState } from "../../../../shared/lib/hooks"
import { Portal } from "../../../../shared/ui/Portal"
import { Auth } from "../../../../widgets/Auth/ui"
import { SavedRecipes } from "../../../../widgets/SavedRecipes/ui/SavedRecipes"
import styles from "./Details.module.scss"
import { HeartOutlined, UserOutlined } from "@ant-design/icons"
import classNames from "classnames"
import { FC } from "react"

export const Details: FC = () => {
  const { state: showAuthModal, toggleState: toggleAuthModal } = useBooleanState()
  const { state: showRecipesModal, toggleState: toggleRecipesModal } = useBooleanState()

  return (
    <>
      <div className={styles.details}>
        <div className={styles.detail} onClick={() => toggleRecipesModal()}>
          <HeartOutlined style={{ fontSize: "32px" }} />
        </div>

        <div className={styles.detail} onClick={() => toggleAuthModal()}>
          <UserOutlined style={{ fontSize: "32px" }} />
        </div>
      </div>
      <Portal>
        <div
          className={classNames(styles["auth-modal"], {
            [styles["auth-modal--open"]]: showAuthModal,
          })}>
          <Auth />
        </div>
      </Portal>
      <Portal>
        <div
          className={classNames(styles["recipes-modal"], {
            [styles["recipes-modal--open"]]: showRecipesModal,
          })}>
          <SavedRecipes />
        </div>
      </Portal>
    </>
  )
}
