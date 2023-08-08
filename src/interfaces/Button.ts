export interface BtnProps {
    w: number,
    h: number,
    title: string,
    onClick: ( event: React.MouseEvent<HTMLButtonElement> ) => void,
    classes?: string
}