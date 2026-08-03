import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useCharactersStore } from "@/entities/character";

export function useCharacterModal() {
  const charactersStore = useCharactersStore();
  const { currentCharacter, isCurrentCharacterLoading, currentCharacterError } =
    storeToRefs(charactersStore);

  const isOpen = ref(false);

  const open = (id: number) => {
    isOpen.value = true;
    charactersStore.fetchCharacterById(id);
  };

  const close = () => {
    isOpen.value = false;
    charactersStore.resetCurrentCharacter();
  };

  return {
    isOpen,
    character: currentCharacter,
    isLoading: isCurrentCharacterLoading,
    errorMessage: currentCharacterError,
    open,
    close,
  };
}