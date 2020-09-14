# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less2.views import JstDef2, JsDefDz2


urlpatterns = {
    path('', JstDef2),
    path('dz/', JsDefDz2),
}







