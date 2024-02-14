export const FormFeedback = ({children}) => {
  return (
    <div
      style={{
        color: 'red',
        fontSize: '0.8rem',
        marginTop: '0.25rem',
        textAlign: 'left',
      }}
    >
      {children}
    </div>
  );
};
FormFeedback.displayName = 'FormFeedback';
