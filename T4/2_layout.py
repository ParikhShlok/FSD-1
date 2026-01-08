import streamlit as st
st.set_page_config(page_title="second program",page_icon="😀",layout="centered")
st.title("Faculty Profile")
st.sidebar.header("Profile Seting")
faculty=st.sidebar.text_input("Faculty Name:","Shlok Parikh")
department=st.sidebar.selectbox("Department",['CE','CSE','AI','IT'])
exp=st.sidebar.slider('years of experience',0,40,10)
st.sidebar.markdown(".....")
col1,col2=st.columns([1,2])
with col1:
    st.write("Basic Information")
    st.write(f"**Name:** {faculty}")
    st.write(f"**Department:** {department}")
    st.write(f"**Experience:** {exp}")
with col2:
    st.header("About")
    st.markdown("....")
with st.expander("Subject Taught"):
    st.write("Python")
    st.write("DBMS")
    st.write("Java")
