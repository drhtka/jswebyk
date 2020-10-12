# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less3.views import JstDef3, JsDefDz3


urlpatterns = [
    path('', JstDef3),
    path('dz/', JsDefDz3),
]







