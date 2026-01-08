import streamlit as st
st.set_page_config(page_title="first program",page_icon="😀",layout="centered")
st.title("first program")
st.header("this is header")
st.subheader("this is subheader")
st.text("this is text")
st.write("this is is write")
st.markdown("this is markdown")
code="""
def add(a,b):
    return a+b
add(3,5)
"""
st.code(code,language='python')
st.code(code,language='C')
