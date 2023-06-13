import { useAppSelector } from "../../../../app/lib"
import { selectRecipesCount } from "../../../../entities/Recipe/model"
import { useBooleanState } from "../../../../shared/lib/hooks"
import { Portal } from "../../../../shared/ui/Portal"
import { Auth } from "../../../../widgets/Auth/ui"
import { SavedRecipes } from "../../../../widgets/SavedRecipes/ui/SavedRecipes"
import styles from "./Details.module.scss"
import { HeartOutlined, UserOutlined } from "@ant-design/icons"
import { Badge } from "antd"
import classNames from "classnames"
import { FC } from "react"

export const Details: FC = () => {
  const { state: showAuthModal, toggleState: toggleAuthModal } = useBooleanState()
  const { state: showRecipesModal, toggleState: toggleRecipesModal } = useBooleanState()

  const count = useAppSelector(selectRecipesCount)

  return (
    <>
      <div className={styles.details}>
        <div
          className={styles.detail}
          onClick={() => toggleRecipesModal()}>
          <Badge count={count}>
            <HeartOutlined style={{ fontSize: "32px" }} />
          </Badge>
        </div>

        <div
          className={styles.detail}
          onClick={() => toggleAuthModal()}>
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
