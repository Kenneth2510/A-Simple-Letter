const KEY = "letter_access"

const PASSWORDS = [
  atob("Q2hvY29CYW5hbmExMDI1"), // ChocoBanana1025
  atob("bmV0aGhoMjU="),         // nethhh25
]

const NAME_ANSWER = atob("bmV0aA==")

export function isUnlocked() :boolean {
    return localStorage.getItem(KEY) === "true"
}

export function unlock(password: string, name: string): boolean {
    const validPassword = PASSWORDS.includes(password)
    const validName = name.trim().toLowerCase() === NAME_ANSWER

    if (validPassword && validName) {
        localStorage.setItem(KEY, "true")
        return true
    }

    return false
}