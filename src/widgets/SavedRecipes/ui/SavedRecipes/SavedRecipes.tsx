import { useAppSelector } from "../../../../app/lib"
import { selectRecipes } from "../../../../entities/Recipe/model"
import { FC } from "react"

export const SavedRecipes: FC = () => {
  const recipes = useAppSelector(selectRecipes)

  return (
    <ul>
      {recipes.map((recipe) => (
        <li>
          
        </li>
      ))}
    </ul>
  )
}
