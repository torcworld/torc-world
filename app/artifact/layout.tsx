import styles from './artifact-frame.module.css';

export default function ArtifactLayout({children}:{children:React.ReactNode}){
  return <div className={styles.frame}>{children}</div>;
}
