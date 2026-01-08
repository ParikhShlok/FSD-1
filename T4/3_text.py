import streamlit as st
st.title("text input demo")
name=st.text_input("enter your name:")
comments=st.text_area("Any Comments/Feedback:")
st.write("live output:")
if name:
    st.write(f'hello {name}')
if comments:
    st.write("your comment:")
    st.write(comments)
