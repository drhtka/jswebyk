# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less1.views import JstDef, JsDefDz1


urlpatterns = [
    path('', JstDef, name='less1'),
    path('dz/', JsDefDz1, name='lessdz1'),
]







