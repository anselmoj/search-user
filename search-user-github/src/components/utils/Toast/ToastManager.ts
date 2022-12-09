import IShowToastDTO from '../../../hooks/useToast/dtos/IShowToastDTO'

interface IToastManager {
  hide(id: string): void
  show(data: IShowToastDTO): void
}

class ToastManager {
  private defaultToastMessage: IToastManager | null

  constructor() {
    this.defaultToastMessage = null
  }

  getDefault(): IToastManager | null {
    return this.defaultToastMessage
  }

  register(ref: IToastManager): void {
    if (ref) {
      this.defaultToastMessage = ref
    }
  }

  show(data: IShowToastDTO): void {
    this.defaultToastMessage?.show(data)
  }

  unregister(): void {
    this.defaultToastMessage = null
  }
}

export default new ToastManager()
