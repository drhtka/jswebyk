# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse

def JstDef(request):
    return TemplateResponse(request, 'less1/html1.html')

def JsDefDz1(request):
    return TemplateResponse(request, 'less1/htmldz1.html')
