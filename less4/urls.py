# -*- coding: utf-8 -*-

from django.conf.urls import url
from django.urls import path

from less4.views import JstDef4, JsDefDz4


urlpatterns = {
    path('', JstDef4),
    path('dz/', JsDefDz4),
}







