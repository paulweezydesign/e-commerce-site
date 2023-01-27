import styles from './Container.module.scss'

const Container = ({children, className, ...rest}) => {
   let containerClassName = styles.container;
   
   if ( className ) {
    containerClassName = `${containerClassName} ${className} `
   }
    return (
        <div className={containerClassName}>
            {children}            
        </div>
    )
}
export default Container;