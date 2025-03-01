import CharacterCreator from "./components/layout/characterCreator/CharacterCreator"

import SelectCharacter from "./components/layout/selectCharacter/SelectCharacter"

import "./global.css"

export default function App() {
  return(
    <div className="flex items-center justify-center h-screen gap-10">
      <CharacterCreator />
      <SelectCharacter />
    </div>
  )
}