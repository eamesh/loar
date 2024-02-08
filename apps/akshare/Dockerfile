FROM python:3.11.7-bullseye

RUN pip install aktools --upgrade -i https://pypi.tuna.tsinghua.edu.cn/simple


ENTRYPOINT [ "python", "-m", "aktools", "--host", "0.0.0.0", "--port", "8080" ]
