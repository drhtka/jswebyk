# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less6.views import JstDef6, JsDefIn6, JsDefDz6


urlpatterns = [
    path('', JstDef6, name='less6'),
    path('lessin6/', JsDefIn6.as_view(), name='lessin6'),
    path('dz/', JsDefDz6, name='lessdz6'),
]







